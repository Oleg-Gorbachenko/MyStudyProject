import React, {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useContext} from '../../context/context';
import {ProfileNavigator} from '../profile-navigator/ProfileNavigator';
import {AuthNavigator} from '../auth-navigator/AuthNavigator';

export const AppNavigator: React.FC = () => {
  const {isAuth} = useContext();
  const renderNavigator = useCallback(() => {
    if (isAuth) {
      return <ProfileNavigator />;
    }
    return <AuthNavigator />;
  }, [isAuth]);

  return <NavigationContainer>{renderNavigator()}</NavigationContainer>;
};
