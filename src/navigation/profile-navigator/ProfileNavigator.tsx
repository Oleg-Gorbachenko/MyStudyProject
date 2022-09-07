import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../common/types';
import {ProfileScreen} from '../../screens/ProfileScreen';

const ProfileStackStack = createNativeStackNavigator<RootStackParamList>();

export const ProfileNavigator = () => {
  return (
    // <View style={{flex: 1}}>
    <ProfileStackStack.Navigator initialRouteName={'Profile'}>
      <ProfileStackStack.Screen
        options={{title: 'Профиль'}}
        name="Profile"
        component={ProfileScreen}
      />
    </ProfileStackStack.Navigator>
    // </View>
  );
};
