import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { format } from 'date-fns';

import { screenHeight, screenWidth } from '../constants/dimensions';
import {colors} from '../constants/theme'

interface ArticleCardProps {
  onPress: () => void;
  title: string;
  date: string;
  content: string;
}

const ArticleCard = ( props : ArticleCardProps) => {

const date = format(new Date(props.date.split(' ')[0]), 'dd/MM/yyyy')

const formatContent = (content: string) => {
    return content.split('<p>')[2].split('</p>')[0]
}

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.cardContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subTitle}>{formatContent(props.content)}</Text>
        <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
    padding: 10,
    width: screenWidth*0.87,
    minHeight: 100,
    borderRadius: 4,
    // backgroundColor: colors.primary + 30,
    marginBottom: 20
},
title:{
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 18,
    color: colors.onBoardingTitle
},
subTitle:{
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 14,
    marginVertical: 5,
    color: colors.onBoardingTitle
},
date:{
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 14,
    marginVertical: 5,
    color: colors.onBoardingTitle + 'a0'
}
});

export default ArticleCard;