import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { updateItemQuantity } from '../components/redux/action';

const MyCart = ({ navigation }) => {
    const cartItems = useSelector((state) => state.reducer);
    const dispatch = useDispatch();

    const handleUpdateQuantity = (id, quantity) => {
        if (quantity >= 0) {
            dispatch(updateItemQuantity(id, quantity));
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.itemDetails}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => handleUpdateQuantity(item.id, item.quantity - 1)}>
                        <MaterialIcons name="remove" size={22} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                        <MaterialIcons name="add" size={22} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.header}>My Cart</Text>
            </View>
            {cartItems.length > 0 ? (
                <FlatList
                    data={cartItems}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <Text style={styles.emptyCartText}>Your cart is empty.</Text>
            )}
        </View>
    );
};

export default MyCart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        marginHorizontal: 18,
        paddingTop: 12, 
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    backButton: {
        paddingRight: 10,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        color: 'black',
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 16,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginRight: 16,
    },
    itemDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        flexShrink: 1,
    },
    price: {
        fontSize: 16,
        color: '#888',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-end'
    },
    quantity: {
        fontSize: 18,
        marginHorizontal: 10,
        color: '#888',
        fontWeight:'500'
    },
    emptyCartText: {
        fontSize: 18,
        color: '#888',
        textAlign: 'center',
        marginTop: 20,
    },
});
