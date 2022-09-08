import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonCustom} from '../../components/ButtonCustom';
import {useContext} from '../../context/context';

export const GreetingScreen = () => {
  const {setIsAuthValue} = useContext();
  return (
    <View style={styles.container}>
      <ButtonCustom title={'Вход'} onPress={setIsAuthValue} />
      <ButtonCustom title={'Регистрация'} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
