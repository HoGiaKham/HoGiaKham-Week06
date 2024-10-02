import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: require('../assets/ca_nau_lau.png'),
    subtitle: 'Ca nau lau, nau mi mini...',
    subtitle2: 'Shop DeVang',
    button: 'chat',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: require('../assets/ga_bo_toi.png'),
    subtitle: '1KG khô gà bơ tỏi...',
    subtitle2: 'Shop LTD Food',
    button: 'chat',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: require('../assets/xa_can_cau.png'),
    subtitle: 'Xe cần cẩu đa năng',
    subtitle2: 'Shop Thế giới đồ chơi',
    button: 'chat',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: require('../assets/do_choi_dang_mo_hinh.png'),
    subtitle: 'Đồ chơi dạng mô hình',
    subtitle2: 'Shop Thế giới đồ chơi',
    button: 'chat',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: require('../assets/lanh_dao_gian_don.png'),
    subtitle: 'Lãnh đạo giản đơn',
    subtitle2: 'Shop Minh Long Book',
    button: 'chat',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: require('../assets/hieu_long_con_tre.png'),
    subtitle: 'Hiểu lòng con trẻ',
    subtitle2: 'Shop Minh Long Book',
    button: 'chat',
  },
];

type ItemProps = {
  title?: string;
  subtitle?: string;
  subtitle2?: string;
  button?: string;
  image?: any;
};

const Item = ({ subtitle, subtitle2, image, button }: ItemProps) => (
  <View style={styles.item}>
    <Image source={image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.subtitle2}>{subtitle2}</Text>
    </View>
    {button && (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{button}</Text>
      </TouchableOpacity>
    )}
  </View>
);

export default function Screen4a() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topP}>
        <Text style={styles.textTop}>Chat</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            subtitle={item.subtitle}
            subtitle2={item.subtitle2}
            image={item.image}
            button={item.button}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  topP: {
    backgroundColor: '#1BA9FF',
    height: 42,
  },
  textTop: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 14,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 13,
    color: '#000000',
  },
  subtitle2: {
    fontSize: 13,
    color: 'red',
    marginTop: 4,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F31111',
    width: 50,
    height: 30,
    marginLeft: 'auto',
  },
  buttonText: {
    color: '#FFFFFF',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
});
