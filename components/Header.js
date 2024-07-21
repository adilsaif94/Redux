// import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'

// const Header = () => {

//     const cartData = useSelector((state) => state.reducer)
//     const [cartItems, setCartItem] = useState(0)
//     useEffect(() => {
//         setCartItem(cartData.length)
//     },[cartData])

//     return (
//         <View style={styles.container}>
//             <Text style={{ color: '808080', fontSize: 40, textAlign: 'right', fontWeight: '500', padding: 8, backgroundColor: 'orange' }}>{cartItems}</Text>
//         </View>
//     )
// }

// export default Header

// const styles = StyleSheet.create({
//     container: {
//     }
// })