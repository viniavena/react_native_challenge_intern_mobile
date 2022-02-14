import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import {screenHeight, screenWidth} from '../constants/dimensions';
import {colors} from '../constants/theme';

interface SearchBarProps {
  articlesList: any[];
  setFilteredList: React.Dispatch<React.SetStateAction<any[]>>;
}

const SearchBar = (props: SearchBarProps) => {

  const [searchValue, setSearchValue] = useState<string>('');

  const searchFilter = (text: string) => {
    if (text != '') {
      const newData = props.articlesList.filter(item => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      props.setFilteredList(newData)
      setSearchValue(text);
    } else {
      props.setFilteredList(props.articlesList)
      setSearchValue(text);
    }
  };

  return (
    <View style={styles.container}>
      <Icon
        name="search"
        size={screenHeight * 0.03}
        color={colors.onBoardingTitle + 'aa'}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder={'Pesquise por um artigo'}
        placeholderTextColor={colors.onBoardingTitle + 60}
        onChangeText={text => searchFilter(text)}
        value={searchValue}
        autoCapitalize="words"
        autoCorrect={false}
      />
      {searchValue != '' ? (
        <TouchableOpacity
          style={styles.cancelIcon}
          onPress={() => searchFilter('')}>
          <Icon
            name="x"
            size={screenHeight * 0.03}
            color={colors.onBoardingTitle + 'aa'}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: screenHeight * 0.025,
    width: screenWidth * 0.87,
    height: 48,
    borderRadius: 4,
    borderColor: colors.onBoardingTitle + 60,
    borderWidth: 1,
  },
  searchIcon: {
    left: 10,
    marginRight: 20,
  },
  cancelIcon: {
    left: 5,
  },
  input: {
    width: screenWidth * 0.65,
    fontSize: 16,
    color: colors.onBoardingTitle + 'aa',
  },
});

export default SearchBar;
