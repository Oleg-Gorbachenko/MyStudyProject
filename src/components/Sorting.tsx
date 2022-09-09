import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import TileIcon from '../common/icons/tile.svg';
import ColumnIcon from '../common/icons/column.svg';
import ProfileIcon from '../common/icons/profile.svg';
import {useContext} from '../context/context';

export const Sorting = () => {
  const {setViewValue, viewValue} = useContext();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setViewValue('tile');
        }}
        disabled={viewValue === 'tile'}>
        <TileIcon
          width={30}
          height={30}
          fill={viewValue === 'tile' ? '#408eef' : '#8e9194'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={viewValue === 'column'}
        onPress={() => {
          setViewValue('column');
        }}>
        <ColumnIcon
          width={30}
          height={30}
          fill={viewValue === 'column' ? '#408eef' : '#8e9194'}
        />
      </TouchableOpacity>
      <ProfileIcon onPress={() => {}} width={30} height={30} fill={'#8e9194'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: 'lightgray',
    borderTopColor: 'lightgray',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    paddingVertical: 10,
  },
});
