import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, View, Image, StatusBar, TextInput, TouchableOpacity, Modal, Button } from 'react-native';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../components/redux/action';
import Toast from 'react-native-toast-message';

const Shopping = ({navigation}) => {
    const [products, setProducts] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const dispatch = useDispatch();

    // for cart count
    const cartData = useSelector((state) => state.reducer)
    const [cartItems, setCartItem] = useState(0)
    useEffect(() => {
        setCartItem(cartData.length)
    }, [cartData])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        Toast.show({
            type: 'success',
            text1: 'Item added to cart',
            text2: `${product.title} has been added to your cart.`,
        });
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                const productsWithFavorites = response.data.map(product => ({ ...product, isFavorite: false }));
                setProducts(productsWithFavorites);
                console.log(productsWithFavorites);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    const toggleFavorite = (id) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
        ));
    };

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };

    const truncateDescription = (description) => {
        const words = description.split(' ');
        if (words.length > 25) {
            return words.slice(0, 25).join(' ') + '...';
        }
        return description;
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => openModal(item)} style={styles.itemContainer}>
            <View style={styles.priceIconContainer}>
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.heartIcon}>
                    <AntDesign name={item.isFavorite ? 'heart' : 'hearto'} size={20} color={item.isFavorite ? '#CD220B' : 'black'} />
                </TouchableOpacity>
            </View>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.mainView}>
            <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
            <Text style={styles.Topname}>Hello AD...</Text>
            <View style={styles.inputView}>
                <TextInput
                    placeholder='Search Your Product ....'
                    placeholderTextColor='#808080'
                    style={styles.input}
                />
                <TouchableOpacity onPress={()=>navigation.navigate('Mycart')} style={{ alignSelf: 'center' }}>
                    <View style={styles.cartView}>
                        <Text style={styles.cartCountText}>{cartItems}</Text>
                    </View>
                    <AntDesign name='shoppingcart' size={32} color='black' style={styles.cartIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.seeAllView}>
                <Text style={styles.CategoryText}>Explore by category</Text>
                <Text style={styles.seeAllText}>See All</Text>
            </View>

            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
                key={(products.length > 0).toString()}
            />

            {selectedProduct && (
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeIcon}>
                                <AntDesign name="close" size={24} color="black" />
                            </TouchableOpacity>
                            <Image style={styles.modalImage} source={{ uri: selectedProduct.image }} />
                            <Text style={styles.modalTitle}>{selectedProduct.title}</Text>
                            <Text style={styles.modalDescription}>{truncateDescription(selectedProduct.description)}</Text>
                            <Text style={styles.modalPrice}>${selectedProduct.price}</Text>
                            <Button title="Add to Cart" onPress={() => handleAddToCart(selectedProduct)} />
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

export default Shopping;

const styles = StyleSheet.create({
    mainView: {
        marginHorizontal: 18,
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    Topname: {
        fontSize: 22,
        marginVertical: 15,
        fontWeight: '700',
        color: 'black',
    },
    input: {
        fontWeight: '500',
        backgroundColor: 'white',
        borderRadius: 18,
        paddingHorizontal: 15,
        width: '80%',
    },
    inputView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cartIcon: {
        alignSelf: 'center',
    },
    cartView: {
        position: 'absolute',
        right: -3,
        top: -2,
        backgroundColor: '#CD220B',
        width: 20,
        height: 20,
        borderRadius: 50,
        alignItems: 'center',
        zIndex: 1,
    },
    cartCountText: {
        color: 'white',
    },
    seeAllView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    CategoryText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
    },
    seeAllText: {
        fontSize: 13,
        color: '#808080',
        fontWeight: '500',
        alignSelf: 'center',
    },
    row: {
        justifyContent: 'space-between',
    },
    itemContainer: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        alignItems: 'center',
        width: '48%',
    },
    priceIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
    heartIcon: {
        padding: 5,
    },
    image: {
        width: 120,
        height: 180,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    price: {
        fontSize: 16,
        color: '#888',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '85%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        position: 'relative',
    },
    closeIcon:
    {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    modalImage: {
        width: 120,
        height: 230,
        resizeMode: 'contain',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    modalDescription: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        marginVertical: 10,
    },
    modalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
});
