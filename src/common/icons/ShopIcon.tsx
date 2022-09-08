import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';

const ShopIcon = (props: SvgProps) => {
  const {color} = props;
  return (
    <Svg width={24} height={24} {...props}>
      <Path
        fill={color ? color : '#8e9194'}
        d="M8 16a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2Zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1ZM18 16a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2Zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1ZM21.75 6.776l-.555 5A2.498 2.498 0 0 1 18.71 14H8.5A2.503 2.503 0 0 1 6 11.5v-5A1.502 1.502 0 0 0 4.5 5h-2a.5.5 0 0 1 0-1h2A2.503 2.503 0 0 1 7 6.5v5A1.502 1.502 0 0 0 8.5 13h10.21a1.499 1.499 0 0 0 1.49-1.335l.556-5a1.502 1.502 0 0 0-.373-1.166A1.482 1.482 0 0 0 19.266 5H10.5a.5.5 0 0 1 0-1h8.766a2.5 2.5 0 0 1 2.485 2.776Z"
      />
    </Svg>
  );
};

const Memo = memo(ShopIcon);
export default Memo;
