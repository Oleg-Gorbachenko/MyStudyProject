import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {HeaderItem} from './HeaderItem';
import {ButtonSubscribe} from './ButtonSubscribe';
import {commonStyles} from '../common/styles/styles';

export const Header = () => {
  return (
    <View style={[styles.container, commonStyles.container]}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
        }}
      />
      <View style={styles.mainWrapper}>
        <View
          style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
          <HeaderItem num={232} desc={'публикации'} />
          <HeaderItem num={4312} desc={'подписчики'} />
          <HeaderItem num={123} desc={'подписки'} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <ButtonSubscribe title={'Подписаться'} onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginTop: 20,
    flexDirection: 'row',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  mainWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingTop: 10,
  },
});
