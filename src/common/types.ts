import {
  NavigationProp,
  NavigatorScreenParams,
  useNavigation,
} from '@react-navigation/native';

export type ViewType = 'tile' | 'column';
export type SetValueViewType = (value: ViewType) => void;

export type StateType = {
  viewValue: ViewType;
  setViewValue: SetValueViewType;
  setIsAuthValue: () => void;
  isAuth: boolean;
};

export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabNavType>;
  Greeting: undefined;
};

export type MainTabNavType = {
  Shop: undefined;
  Map: undefined;
  Profile: undefined;
};

type UseNavigationType = NavigationProp<RootStackParamList>;
export const useAppNavigation = () => useNavigation<UseNavigationType>();
