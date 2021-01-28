import React from 'react';
import { View, Text, Dimensions, FlatList, Image , TouchableOpacity, StyleSheet} from 'react-native';
import DataContext from "../Context/Context";

import Flags from "../Flags/Flags";
import { images } from "../../data/data";
import { biggerFontSizer } from "../../utils/index";
import ProductFull from "../ProductFull/ProductFull";

import { Modalize } from 'react-native-modalize';

const { width, height } = Dimensions.get('window');

let CARD_WIDTH_1 = width *.85;
let CARD_WIDTH_2 = width *.45;
const CARD_HEIGHT_1 = height *.5;
const CARD_HEIGHT_2 = height *.45;

const ProductCard = ({ data, layout }) => {
    const modalRef = React.useRef(null);

    const [itemSelected, setItemSelected] = React.useState({})

    const { setCart } = React.useContext(DataContext);
    
    function handleAddCart(item) {
        setCart(cart => [...cart, item]);
    }
    const openModal = React.useCallback(( item ) => {
        setItemSelected(item);
        modalRef.current?.open();
    },[]);

    const ImageProduct = React.useCallback(({ data }) => {
        return (
            <View style={{ width: '100%', height: '45%',justifyContent: 'center', alignItems:'center' }}>
                {
                    images.map( image => {
                        if(image.id === data.id){
                            return <Image key={data.id} source={{ uri: image.img[0]}} style={{  width: '100%', height: '100%', resizeMode: 'contain' }}/>
                        }
                    })
                }
            </View> 
        )
    }, []);
    
    const ItemCard1Column = React.useCallback(({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => openModal(item)} 
                activeOpacity={.7}
                style={{ 
                        width: CARD_WIDTH_1, 
                        height: CARD_HEIGHT_1, 
                        backgroundColor: '#fff', 
                        marginRight: 25, 
                        borderRadius: 30, 
                        elevation: 5,
                        padding: 10,
                        marginBottom: 25,
                    }}
            > 
                <Flags data={item} />
                <ImageProduct data={item} />
                <View style={{ marginTop: 8, marginLeft: 10, height: '18%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text numberOfLines={1} style={{ fontSize:biggerFontSizer(width), fontWeight: 'bold', color: '#012a4a'}}>
                        {item.name}
                    </Text>
                    <Text style={{ color: '#3d5a80', fontSize:biggerFontSizer(width), fontWeight: 'bold' }}> R$ 29,90</Text>
                </View>
                <View style={{  justifyContent:'center', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity 
                        onPress={() => handleAddCart(item)}
                        style={{ backgroundColor:"#012a4a", width: '70%', borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5, justifyContent:'center', alignItems: 'center' }}
                    >
                        <Text adjustsFontSizeToFit style={{ color: '#fff', fontSize:biggerFontSizer(width) , fontWeight: 'bold'}}> Adicionar </Text>
                    </TouchableOpacity>
                </View>               
            </TouchableOpacity>
        )
    }, []);

    const ItemCard2Column = React.useCallback(({ item }) => {
        return (
            <TouchableOpacity 
                onPress={() => openModal(item)}
                activeOpacity={.7}
                style={{ 
                        width: CARD_WIDTH_2, 
                        height: CARD_HEIGHT_2, 
                        backgroundColor: '#fff', 
                        marginRight: 10, 
                        borderRadius: 10, 
                        elevation: 5,
                        padding: 10,
                        marginBottom: 10,
                    }}
            > 
                <Flags data={item} />
                <ImageProduct data={item} />
                <View style={{ marginLeft: 10, height: '30%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text numberOfLines={2} style={{ fontSize:biggerFontSizer(width), fontWeight: 'bold', color: '#012a4a'}}>
                        {item.name}
                    </Text>
                    <Text style={{ color: '#3d5a80', fontSize:biggerFontSizer(width), fontWeight: 'bold' }}> R$ 29,90</Text>
                </View>
                <View style={{  justifyContent:'center', alignItems: 'center', height: '10%' }}>
                    <TouchableOpacity 
                        onPress={() => handleAddCart(item)}
                        style={{ backgroundColor:"#012a4a", height: '100%', width: '70%', borderRadius: 5,  justifyContent:'center', alignItems: 'center' }}
                    >
                        <Text adjustsFontSizeToFit style={{ color: '#fff', fontSize:biggerFontSizer(width) , fontWeight: 'bold'}}> Adicionar </Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }, []);

    return (
        <>
            {
                layout === true ?
                    <FlatList
                        key={"List_2c"}
                        data={data}
                        keyExtractor={item => item.id.toString()}
                        renderItem={ItemCard2Column}
                        contentContainerStyle={styles.verticalLayout}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        numColumns={2}
                    />
                    :
                    <FlatList
                        key={"List"}
                        data={data}
                        keyExtractor={item => item.id.toString()}
                        renderItem={ItemCard1Column}
                        contentContainerStyle={styles.horizontalLayout}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        numColumns={1}
                    />
            }
            <Modalize 
                ref={modalRef}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
                snapPoint={height * .85}
            >
                <ProductFull item={itemSelected}/>
            </Modalize>
        </>
    );
}

const styles = StyleSheet.create({
    horizontalLayout: {               
        marginLeft: '5%',
        paddingLeft: 10,
    },
    verticalLayout: {        
        flexGrow: 1,               
        marginLeft: '1%',
        paddingLeft: 10,
        alignItems: 'center',
    }
})

export default ProductCard;