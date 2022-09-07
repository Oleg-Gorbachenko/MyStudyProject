import React, {useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {commonStyles} from '../common/styles/styles';

type MainPropsType = {
  title: string;
  desc: string;
};

export const Main = ({title, desc}: MainPropsType) => {
  const [showDesc, setShowDesc] = useState<boolean>(false);

  return (
    <View style={[styles.container, commonStyles.container]}>
      <Text style={styles.title}>{title}</Text>
      <TouchableWithoutFeedback onPress={() => setShowDesc(!showDesc)}>
        <View style={styles.wrapper}>
          <Text numberOfLines={showDesc ? 0 : 2} style={styles.desc}>
            {desc}
          </Text>
          <Text style={styles.btn}>{showDesc ? 'скрыть' : 'ещё'}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  title: {
    paddingTop: 25,
    paddingBottom: 10,
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: '600',
  },
  desc: {
    maxWidth: '90%',
    fontSize: 16,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  btn: {
    color: 'gray',
    fontSize: 16,
  },
});
