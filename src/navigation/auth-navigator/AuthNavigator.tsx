import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../common/types';
import {GreetingScreen} from '../../screens/GreetingScreen';

const AuthStackStack = createNativeStackNavigator<RootStackParamList>();

export const AuthNavigator = () => {
  return (
    // <View style={{flex: 1}}>
    <AuthStackStack.Navigator initialRouteName={'Greeting'}>
      <AuthStackStack.Screen
        options={{title: 'My Instagram'}}
        name="Greeting"
        component={GreetingScreen}
      />
    </AuthStackStack.Navigator>
    // </View>
  );
};
