import React from 'react';
import {MainTabNavType} from '../../common/types';
import {ProfileScreen} from '../../screens/Main/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ShopScreen} from '../../screens/Main/ShopScreen';
import {MapScreen} from '../../screens/Main/MapScreen';
import ShopIcon from '../../common/icons/ShopIcon';
import MapIcon from '../../common/icons/MapIcon';
import ProfileIcon from '../../common/icons/ProfileIcon';

const MainTab = createBottomTabNavigator<MainTabNavType>();

export const MainNavigator = () => {
  return (
    <MainTab.Navigator
      initialRouteName={'Profile'}
      screenOptions={{headerShown: false}}>
      <MainTab.Screen
        options={{
          title: 'Магазин',
          tabBarIcon: ({focused}) => (
            <ShopIcon color={focused ? '#408eef' : '#8e9194'} />
          ),
        }}
        name="Shop"
        component={ShopScreen}
      />
      <MainTab.Screen
        options={{
          title: 'Карта',
          tabBarIcon: ({focused}) => (
            <MapIcon color={focused ? '#408eef' : '#8e9194'} />
          ),
        }}
        name="Map"
        component={MapScreen}
      />
      <MainTab.Screen
        options={{
          title: 'Профиль',
          tabBarIcon: ({focused}) => (
            <ProfileIcon color={focused ? '#408eef' : '#8e9194'} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
