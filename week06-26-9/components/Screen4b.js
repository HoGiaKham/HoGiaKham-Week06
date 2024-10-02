import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importing FontAwesome from @expo/vector-icons

const products = [
  {
    id: '1',
    name: 'Cáp chuyển từ cổng USB sang PS2..',
    star: '⭐️⭐️⭐️⭐️ (15)',
    price: '69.000đ -39%',
    imageUrl: require('../assets/giacchuyen1.png'), 
  },
  {
    id: '2',
    name: 'Cáp chuyển từ cổng USB sang PS2..',
    star: '⭐️⭐️⭐️⭐️ (15)',
    price: '69.000đ -39%',
    imageUrl: require('../assets/daynguon1.png'), 
  },
  {
    id: '3',
    name: 'Cáp chuyển từ cổng USB sang PS2..',
    star: '⭐️⭐️⭐️⭐️ (15)',
    price: '69.000đ -39%',
    imageUrl: require('../assets/dauchuyendoipsps21.png'), 
  },
  {
    id: '4',
    name: 'Cáp chuyển từ cổng USB sang PS2..',
    star: '⭐️⭐️⭐️⭐️ (15)',
    price: '69.000đ -39%',
    imageUrl: require('../assets/dauchuyendoi1.png'), 
  },
  {
    id: '5',
    name: 'Cáp chuyển từ cổng USB sang PS2..',
    star: '⭐️⭐️⭐️⭐️ (15)',
    price: '69.000đ -39%',
    imageUrl: require('../assets/carbusbtops21.png'), 
  },
  {
    id: '6',
    name: 'Cáp chuyển từ cổng USB sang PS2..',
    star: '⭐️⭐️⭐️⭐️ (15)',
    price: '69.000đ -39%',
    imageUrl: require('../assets/daucam1.png'), // Ensure this image exists in your assets folder
  },
];

const ProductItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.imageUrl} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.shopName}>{item.star}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </View>
  );
};

export default function Screen4b() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.topBarText}>Chat</Text>
        <TouchableOpacity>
          <FontAwesome name="shopping-cart" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
        numColumns={2} // Chia thành 2 cột
        columnWrapperStyle={styles.columnWrapper} // Style cho cột
      />

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="bars" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="home" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="arrow-left" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00A0FF',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  topBarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    padding: 10,
    borderRadius: 8,
    elevation: 3,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
    marginTop: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopName: {
    fontSize: 14,
    color: 'gray',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#00A0FF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
