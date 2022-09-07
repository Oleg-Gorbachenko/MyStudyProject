import React from 'react';
import {Header} from '../components/Header';
import {Main} from '../components/Main';
import {Sorting} from '../components/Sorting';
import {MyFlatList} from '../components/MyFlatList';
import {StyleSheet, View} from 'react-native';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Main
        title={'First Name'}
        desc={
          'Information about me: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, delectus dolor dolore illo impedit itaque, nesciunt nihil placeat praesentium provident quidem repellendus soluta tempore tenetur voluptate! Facilis incidunt modi reprehenderit.'
        }
      />
      <Sorting />
      <MyFlatList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
