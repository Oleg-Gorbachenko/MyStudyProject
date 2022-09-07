import React from 'react';
import {StyleSheet, View} from 'react-native';
import SortSvg from '../common/svg/SortSvg';
import ContactsSvg from '../common/svg/ContactsSvg';
import ViewIcon from '../common/svg/ViewIcon';

export const Sorting = () => {
  return (
    <View style={styles.container}>
      <SortSvg />
      <ViewIcon />
      <ContactsSvg />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: 'lightgray',
    borderTopColor: 'lightgray',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    paddingVertical: 10,
  },
});
