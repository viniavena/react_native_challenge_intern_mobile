import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import {showMessage} from 'react-native-flash-message';

import {PropsMainScreen} from '../../../routes/main.routes';
import {getArticles} from '../../../services/healthCareApi';
import {colors} from '../../../constants/theme';
import {screenHeight, screenWidth} from '../../../constants/dimensions';
import ArticleCard from '../../../components/ArticleCard';


const ItemDivider = () => {
    return (
      <View
        style={styles.separator}
      />
    );
}

const MainScreen = ({navigation}: PropsMainScreen) => {
  const [loading, setLoading] = useState(false);
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const articles = await getArticles();
      if (!ignore) setArticlesList(articles.articles);
    }

    console.log(articlesList)
    fetchData();
    return () => { ignore = true; }

  }, []);


  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus artigos</Text>

        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('../../../assets/images/sanar-icon.png')}
            style={{height: screenHeight * 0.1}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size={'large'} color={colors.primary} />
      ) : (
        <FlatList
        style={{width: screenWidth}}
        contentContainerStyle={{alignItems:'center'}}
          data={articlesList}
          renderItem={({item, index}) => (
            <ArticleCard
              content={item.content}
              date={item.date}
              title={item.title}
              lang={item.lang}
              onPress={() => console.log('')}
            />
          )}
          ItemSeparatorComponent={ItemDivider}
        />
      )}
    </View>
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
  separator:{
    alignSelf:'center',
    height: 1,
    width: screenWidth * 0.85 - 10,
    backgroundColor: colors.onBoardingTitle + 60
  }
});

export default MainScreen;
