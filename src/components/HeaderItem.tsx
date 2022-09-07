import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type HeaderItemProps = {
  num: number;
  desc: string;
};

export const HeaderItem = ({num, desc}: HeaderItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textNum}>{num}</Text>
      <Text style={styles.textDesc}>{desc}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textNum: {
    fontSize: 20,
    fontWeight: '500',
  },
  textDesc: {
    fontSize: 13,
    color: 'gray',
  },
});
