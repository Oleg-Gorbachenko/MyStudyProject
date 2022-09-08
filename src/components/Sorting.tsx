import React from 'react';
import {StyleSheet, View} from 'react-native';
import SortSvg from '../common/icons/SortSvg';
import ContactsSvg from '../common/icons/ContactsSvg';
import ViewIcon from '../common/icons/ViewIcon';

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
