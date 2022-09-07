import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useContext} from '../context/context';
import {commonStyles} from '../common/styles/styles';

type ArrType = {
  id: number;
  address: string;
};

const {width: WIDTH} = Dimensions.get('screen');

const arrData: ArrType[] = new Array(11).fill(null).map((_, index) => ({
  id: index + 1,
  address:
    'https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg',
}));

const emptyComponent = () => {
  return (
    <View>
      <Text>EMPTY</Text>
    </View>
  );
};

export const MyFlatList = () => {
  const {viewValue} = useContext();

  const renderItem: ListRenderItem<ArrType> = ({item}) => {
    return (
      <View
        style={viewValue === 'column' ? styles.itemColumn : styles.itemTile}>
        <Image
          resizeMode={'cover'}
          style={styles.image}
          source={{
            uri: item.address,
          }}
        />
      </View>
    );
  };

  return (
    <FlatList
      style={commonStyles.container}
      key={viewValue === 'tile' ? 'h' : 'v'}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      // contentContainerStyle={{justifyContent: 'center'}}
      // columnWrapperStyle={{justifyContent: 'flex-start'}}
      data={arrData}
      renderItem={renderItem}
      numColumns={viewValue === 'tile' ? 3 : 1}
      keyExtractor={item => item.id.toString()}
      // ListFooterComponent={() => {
      //   return (
      //     <View>
      //       <Text>FOOTER</Text>
      //     </View>
      //   );
      // }}
      ListEmptyComponent={emptyComponent}
    />
  );
};

const styles = StyleSheet.create({
  itemTile: {
    width: WIDTH / 3,
    height: WIDTH / 3,
    marginVertical: 1,
    paddingHorizontal: 1,
    flexShrink: 1,
    flexBasis: `${100 / 3}%`,
  },
  itemColumn: {
    height: WIDTH,
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  headerWrapper: {
    marginVertical: 10,
  },
});
