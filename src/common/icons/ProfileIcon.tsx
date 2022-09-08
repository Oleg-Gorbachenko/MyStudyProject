import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';

const ProfileIcon = (props: SvgProps) => {
  const {color} = props;
  return (
    <Svg viewBox="0 0 64 64" width={24} height={24} {...props}>
      <Path
        fill={color ? color : '#8e9194'}
        d="M60 4H4a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm2 52c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V8c0-1.103.897-2 2-2h56c1.103 0 2 .897 2 2v48z"
      />
      <Path
        fill={color ? color : '#8e9194'}
        d="M32 32c4.418 0 8-4.03 8-9s-3.582-9-8-9-8 4.03-8 9 3.582 9 8 9zm0-16c3.308 0 6 3.14 6 7s-2.692 7-6 7-6-3.14-6-7 2.692-7 6-7zM32 33c-8.837 0-16 7.383-16 16.49 0 1.206.133 2.378.372 3.51h31.256c.239-1.132.372-2.304.372-3.51C48 40.383 40.836 33 32 33zm13.92 18H18.08a14.628 14.628 0 0 1-.08-1.51C18 41.5 24.28 35 32 35s14 6.5 14 14.49c0 .499-.027 1.003-.08 1.51z"
      />
    </Svg>
  );
};

const Memo = memo(ProfileIcon);
export default Memo;
