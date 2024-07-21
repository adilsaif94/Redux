// import { Button, Image, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addToCart, removeFromCart } from './redux/action'

// const Product = (props) => {
//     const item = props.item;

//     const dispatch = useDispatch();
//     const cartItems = useSelector((state) => state.reducer)
//     const [isAdded, setIsAdded] = useState(false)

//     const handleAddToCart = (item) => {
//         dispatch(addToCart(item))
//     }

//     const handleRemoveFromCart = (item) => {
//         dispatch(removeFromCart(item.name))
//     }

//     useEffect(() => {
//         let result = cartItems.filter((element)=>{
//             return element.name === item.name
//         });
//         if (result.length){
//             setIsAdded(true)
//         } else {
//             setIsAdded(false)
//         }
//     }, [cartItems])

//     return (
//         <View style={{ alignItems: 'center', borderBottomWidth: 2, padding: 13 }}>
//             <Text style={{ fontSize: 20 }}>{item.name}</Text>
//             <Text style={{ fontSize: 20 }}>{item.price}</Text>
//             <Text style={{ fontSize: 20 }}>{item.color}</Text>
//             <Image style={{ width: 200, height: 200 }} source={{ uri: item.Image }} />
//             {
//                 isAdded ?
//                     <Button title='Remove From Cart' onPress={() => handleRemoveFromCart(item)} />
//                     :
//                     <Button title='Add To Cart' onPress={() => handleAddToCart(item)} />
//             }

//         </View>
//     )
// }

// export default Product

// const styles = StyleSheet.create({
//     container: {
//     }
// })