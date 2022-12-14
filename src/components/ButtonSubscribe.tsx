import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {WIDTH} from '../common/variables';

type ButtonSubscribePropsType = {
  onPress: () => void;
  title: string;
};

export const ButtonSubscribe = ({title, onPress}: ButtonSubscribePropsType) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#408eef',
    paddingVertical: 6,
    paddingHorizontal: WIDTH / 6,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
