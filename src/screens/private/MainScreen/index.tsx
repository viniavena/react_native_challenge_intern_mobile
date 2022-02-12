import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';

import {Modalize} from 'react-native-modalize';

import {PropsMainScreen} from '../../../routes/main.routes';
import {getArticles} from '../../../services/healthCareApi';
import {colors} from '../../../constants/theme';
import {screenHeight, screenWidth} from '../../../constants/dimensions';
import ArticleCard from '../../../components/ArticleCard';
import ArticleModal from '../../../components/ArticleModal';

const ItemDivider = () => {
  return <View style={styles.separator} />;
};

const MainScreen = ({navigation}: PropsMainScreen) => {
  const [loading, setLoading] = useState(false);
  const [articlesList, setArticlesList] = useState([]);
  const [articleInfo, setArticleInfo] = useState({});

  useEffect(() => {
    setLoading(true);
    let ignore = false;

    async function fetchData() {
      const articles = await getArticles();
      if (!ignore) setArticlesList(articles.articles);
    }

    fetchData();

    setLoading(false);
    return () => {
      ignore = true;
    };
  }, []);

  const modalizeRef = useRef<Modalize>(null);

  function openDetails(info: object) {
    modalizeRef.current?.open();
    setArticleInfo(info);
  }

  const handleSignOut = () => {
    Alert.alert(
      'Sair',
      'Você deseja sair?',
      [
        {
          text: 'Cancelar',
          onPress: () => {
            return null;
          },
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            navigation.navigate('SignInScreen')
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <View style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.title}>Meus artigos</Text>

          <TouchableOpacity onPress={handleSignOut}>
            <Image
              source={require('../../../assets/images/sanar-icon.png')}
              style={{height: screenHeight * 0.1}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {loading ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={'large'} color={colors.primary} />
          </View>
        ) : (
          <FlatList
            style={{width: screenWidth}}
            contentContainerStyle={{alignItems: 'center'}}
            data={articlesList}
            renderItem={({item, index}) => (
              <ArticleCard
                content={item.content}
                date={item.date}
                title={item.title}
                lang={item.lang}
                onPress={() => openDetails(item)}
              />
            )}
            ItemSeparatorComponent={ItemDivider}
          />
        )}
      </View>

      <ArticleModal
        modalRef={modalizeRef}
        content={articleInfo.content}
        title={articleInfo.title}
        date={articleInfo.date}
        lang={articleInfo.lang}
      />
    </>
  );
};
const styles = StyleSheet.create({
  background: {
    paddingTop: screenHeight * 0.05,
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: screenWidth * 0.85,
  },
  title: {
    fontFamily: 'RedHatDisplay-Black',
    fontSize: 34,
    color: colors.primary,
  },
  separator: {
    alignSelf: 'center',
    height: 1,
    width: screenWidth * 0.85 - 10,
    backgroundColor: colors.onBoardingTitle + 60,
  },
});

export default MainScreen;
