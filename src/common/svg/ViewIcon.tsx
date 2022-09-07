import * as React from 'react';
import {memo} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {useContext} from '../../context/context';

const SvgComponent = (props: SvgProps) => {
  const {setViewValue, viewValue} = useContext();

  return (
    <TouchableOpacity
      onPress={() => {
        setViewValue('column');
      }}
      disabled={viewValue === 'column'}>
      <Svg width={24} height={24} {...props}>
        <Path
          fill={viewValue === 'column' ? '#408eef' : '#8e9194'}
          fillRule="evenodd"
          d="M21 20a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18ZM19 6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h14Zm0 2H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm2-6a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2h18Z"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
