import React from 'react';
import {MainTabNavType} from '../../common/types';
import {ProfileScreen} from '../../screens/Main/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ShopScreen} from '../../screens/Main/ShopScreen';
import {MapScreen} from '../../screens/Main/MapScreen';

const MainTab = createBottomTabNavigator<MainTabNavType>();

export const MainNavigator = () => {
  return (
    <MainTab.Navigator
      initialRouteName={'Profile'}
      screenOptions={{headerShown: false}}>
      <MainTab.Screen
        options={{title: 'Магазин'}}
        name="Shop"
        component={ShopScreen}
      />
      <MainTab.Screen
        options={{title: 'Карта'}}
        name="Map"
        component={MapScreen}
      />
      <MainTab.Screen
        options={{title: 'Профиль'}}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
