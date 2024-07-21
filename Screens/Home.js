import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Product from '../components/Product'

const Home = () => {


  const products = [
    {
      name: 'Samsung',
      color: 'white',
      price: 30000,
      Image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    },
    {
      name: 'Apple',
      color: 'black',
      price: 140000,
      Image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    },
    {
      name: 'Lava',
      color: 'green',
      price: 50000,
      Image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    },
  ]

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {
          products.map((item,index) => <Product key={index} item={item} /> )
        }
      </ScrollView>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1
  }
  })