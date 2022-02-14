import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {format} from 'date-fns';
import {Modalize} from 'react-native-modalize';
import RenderHtml from 'react-native-render-html';

import {screenHeight, screenWidth} from '../constants/dimensions';
import {colors} from '../constants/theme';
import {ScrollView} from 'react-native-gesture-handler';

interface ArticleModalProps {
  modalRef: any;
  title: string;
  date: string;
  content: string;
  lang: string;
}

const ArticleModal = (props: ArticleModalProps) => {

  let date = props.date
  try{
    date = format(new Date(props.date.split(' ')[0]), 'dd/MM/yyyy');
  } catch(err){
    console.log(err)
  }
  

  const formatContent = (content: string) => {
    var str = '';
    try {
      str = content.split('<strong>')[1].split('</strong>')[0];
    } catch (err) {}
    return str;
  };

  const source = {
    html: props.content,
  };

  const articleLanguage = (lang: string) => {
    var language = '';
    if (lang == 'en') {
      language = 'Inglês';
    } else if (lang == 'es') {
      language = 'Espanhol';
    }
    return language;
  };

  return (
    <Modalize ref={props.modalRef} modalTopOffset={screenHeight * 0.02}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.infos}>
          <Text style={styles.date}>{articleLanguage(props.lang)}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>

        <RenderHtml contentWidth={screenWidth * 0.87} source={source} />
      </ScrollView>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    paddingVertical: 20,
    width: screenWidth * 0.87,
    minHeight: 100,
    borderRadius: 4,
  },
  title: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 18,
    color: colors.onBoardingTitle,
  },
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  date: {
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: 14,
    marginVertical: 5,
    color: colors.onBoardingTitle + 'a0',
  },
});

export default ArticleModal;
