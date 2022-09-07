import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type ButtonCustomPropsType = {
  onPress: () => void;
  title: string;
};

export const ButtonCustom = ({onPress, title}: ButtonCustomPropsType) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#408eef',
    paddingVertical: 16,
    paddingHorizontal: 66,
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
