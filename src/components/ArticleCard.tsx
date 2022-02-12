import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {format} from 'date-fns';

import {screenHeight, screenWidth} from '../constants/dimensions';
import {colors} from '../constants/theme';

interface ArticleCardProps {
  onPress: () => void;
  title: string;
  date: string;
  content: string;
  lang: string;
}

const ArticleCard = (props: ArticleCardProps) => {
  const date = format(new Date(props.date.split(' ')[0]), 'dd/MM/yyyy');

  const formatContent = (content: string) => {
    var str = '';
    try {
      str = content.split('<strong>')[1].split('</strong>')[0];
    } catch (err) {}
    return str;
  };

  const articleLanguage = (lang: string) => {
      var language = ''
      if(lang == 'en'){
       language = 'Inglês'   
      }
      else if(lang == 'es'){
          language = 'Espanhol'
      }
      return language
  }

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.cardContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subTitle}>{formatContent(props.content)}</Text>
      <View style={styles.infos}>
      <Text style={styles.date}>{articleLanguage(props.lang)}</Text>
      <Text style={styles.date}>{date}</Text>
      </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    width: screenWidth * 0.87,
    minHeight: 100,
    borderRadius: 4,
  },
  title: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 18,
    color: colors.onBoardingTitle,
  },
  subTitle: {
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 16,
    marginVertical: 5,
    color: colors.onBoardingTitle,
  },
  infos:{
flexDirection:'row',
justifyContent:'space-between'
  },
  date: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 14,
    marginVertical: 5,
    color: colors.onBoardingTitle + 'a0',
  },
});

export default ArticleCard;
