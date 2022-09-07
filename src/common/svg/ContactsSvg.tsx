import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
import {TouchableOpacity} from 'react-native';

const SvgComponent = (props: SvgProps) => (
  <TouchableOpacity>
    <Svg viewBox="0 0 512 512" width={30} height={30} {...props}>
      <Path
        fill={'#8e9194'}
        d="M472 48H40a24.028 24.028 0 0 0-24 24v368a24.028 24.028 0 0 0 24 24h88v-58.822a20.01 20.01 0 0 1 10.284-17.478l91.979-51.123L200 260.919V200a56 56 0 0 1 112 0v60.919l-30.263 75.655 91.979 51.126A20.011 20.011 0 0 1 384 405.178V464h88a24.028 24.028 0 0 0 24-24V72a24.028 24.028 0 0 0-24-24Zm-8 384h-48v-26.822a52.027 52.027 0 0 0-26.738-45.451L321.915 322.3 344 267.081V200a88 88 0 0 0-176 0v67.081l22.085 55.219-67.347 37.432A52.027 52.027 0 0 0 96 405.178V432H48V80h416Z"
      />
    </Svg>
  </TouchableOpacity>
);

const Memo = memo(SvgComponent);
export default Memo;