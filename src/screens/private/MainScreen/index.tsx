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
  StatusBar,
} from 'react-native';

import {Modalize} from 'react-native-modalize';
import {showMessage} from 'react-native-flash-message';

import {PropsMainScreen} from '../../../routes/main.routes';
import {getArticles} from '../../../services/healthCareApi';
import {colors} from '../../../constants/theme';
import {screenHeight, screenWidth} from '../../../constants/dimensions';
import ArticleCard from '../../../components/ArticleCard';
import ArticleModal from '../../../components/ArticleModal';
import SearchBar from '../../../components/SearchBar';

const ItemDivider = () => {
  return <View style={styles.separator} />;
};

const MainScreen = ({navigation}: PropsMainScreen) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [originalArticlesList, setOriginalArticlesList] = useState<any[]>([]);
  const [filteredArticlesList, setFilteredArticlesList] = useState<any[]>([]);
  const [articleInfo, setArticleInfo] = useState<any>({});

  useEffect(() => {
    
    let ignore = false;

    async function fetchData() {
      setLoading(true);
      const result = await getArticles();
      setLoading(false);
      if (!ignore) {setOriginalArticlesList(result.articles)
       setFilteredArticlesList(result.articles) 
      };
    }

    fetchData();

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
            showMessage({
              message: 'Volte sempre!',
              type: 'success',
            });
            navigation.navigate('SignInScreen');
          },
          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <>
      <View style={styles.background}>
        <StatusBar barStyle="dark-content" />
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
          <>
            <SearchBar
              articlesList={originalArticlesList}
              setFilteredList={setFilteredArticlesList}
            />
            <FlatList
              style={{width: screenWidth}}
              contentContainerStyle={{alignItems: 'center'}}
              data={filteredArticlesList}
              renderItem={({item, index}) => (
                <ArticleCard
                  key={index}
                  content={item.content}
                  date={item.date}
                  title={item.title}
                  lang={item.lang}
                  onPress={() => openDetails(item)}
                />
              )}
              ItemSeparatorComponent={ItemDivider}
            />
          </>
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
    marginVertical: 5,
    backgroundColor: colors.onBoardingTitle + 60,
  },
});

export default MainScreen;
