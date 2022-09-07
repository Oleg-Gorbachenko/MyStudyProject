import {NavigationProp, useNavigation} from '@react-navigation/native';

export type ViewType = 'tile' | 'column';
export type SetValueViewType = (value: ViewType) => void;

export type StateType = {
  viewValue: ViewType;
  setViewValue: SetValueViewType;
};

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Auth: undefined;
};

type UseNavigationType = NavigationProp<RootStackParamList>;
export const useAppNavigation = () => useNavigation<UseNavigationType>();
