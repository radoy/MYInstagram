import React from 'react';
import {FlatList} from 'react-native';
import Story from '../Story';
import styles from './styles';

const data = [
  {
    imageUri:
      'https://dl.kaskus.id/vgfiles.nabstudio.com/portal/35aecc328c209176219cc2538e9b3700_131120_thumbnail.jpg',
    name: 'Kaks',
    id: '1',
  },
  {
    imageUri: 'https://randomuser.me/api/portraits/lego/0.jpg',
    name: 'Mr. Robot',
    id: '2',
  },
  {
    imageUri: 'https://randomuser.me/api/portraits/lego/1.jpg',
    name: 'Mr. Lego',
    id: '3',
  },
  {
    imageUri: 'https://rizaladoy.com/assets/img/profile.jpg',
    name: 'Yusrizal',
    id: '4',
  },
  {
    imageUri:
      'https://dl.kaskus.id/vgfiles.nabstudio.com/portal/35aecc328c209176219cc2538e9b3700_131120_thumbnail.jpg',
    name: 'Kaks1',
    id: '5',
  },
  {
    imageUri: 'https://randomuser.me/api/portraits/lego/0.jpg',
    name: 'Mr. Robot1',
    id: '6',
  },
  {
    imageUri: 'https://randomuser.me/api/portraits/lego/1.jpg',
    name: 'Mr. Lego1',
    id: '7',
  },
  {
    imageUri: 'https://rizaladoy.com/assets/img/profile.jpg',
    name: 'Yusrizal1',
    id: '8',
  },
];
const Stories = () => {
  const RenderList = ({item}) => (
    <Story imageUri={item.imageUri} name={item.name} />
  );

  return (
    <FlatList
      style={styles.container}
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <RenderList key={item.id} item={item} />}
    />
  );
};

export default Stories;
