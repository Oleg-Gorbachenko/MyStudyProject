import React from 'react';
import {StateType, ViewType} from '../common/types';

type Props = {
  children: (renderProps: StateType) => React.ReactElement;
};

const initialState: StateType = {
  viewValue: 'tile',
  setViewValue: () => {},
  isAuth: true,
  setIsAuthValue: () => {},
};

const Component: React.FC<Props> = props => {
  const {children} = props;

  const [isAuth, setIsAuth] = React.useState<boolean>(false);

  const setIsAuthValue = React.useCallback(() => {
    setIsAuth(!isAuth);
  }, [isAuth, setIsAuth]);

  const [viewValue, setValue] = React.useState<ViewType>('tile');

  const setViewValue = React.useCallback(() => {
    setValue(viewValue === 'tile' ? 'column' : 'tile');
  }, [viewValue, setValue]);

  return children({
    viewValue,
    setViewValue,
    isAuth,
    setIsAuthValue,
  });
};

const Context = React.createContext(initialState);

export const Provider: React.FC<
  React.PropsWithChildren<Omit<Props, 'children'>>
> = props => {
  const {children, ...restProps} = props;

  return (
    <Component {...restProps}>
      {state => <Context.Provider value={state}>{children}</Context.Provider>}
    </Component>
  );
};

export const useContext = () => React.useContext(Context);
