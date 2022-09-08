import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../common/types';
import {GreetingScreen} from '../../screens/Greeting/GreetingScreen';

const AuthStackStack = createNativeStackNavigator<RootStackParamList>();

export const AuthNavigator = () => {
  return (
    <AuthStackStack.Navigator initialRouteName={'Greeting'}>
      <AuthStackStack.Screen
        options={{title: 'My App'}}
        name="Greeting"
        component={GreetingScreen}
      />
    </AuthStackStack.Navigator>
  );
};
