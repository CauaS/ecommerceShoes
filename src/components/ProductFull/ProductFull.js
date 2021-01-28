import React from 'react';
import { Text, View, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { images, sizes } from "../../data/data";
import Flags from "../Flags/Flags";

const { width, height } = Dimensions.get('window');

const IMAGE_HEIGHT = height *.45

const ProductFull = ({ item }) => {
    const [imageSelect, setImageSelectes] = React.useState()
    const fontSizer = React.useCallback((width) => {
        if(width > 400){
            return 25;
        }else if(width > 250){
            return 20;
        }else { 
            return 15;
        }
    },[]);

    const ImagesProduct = React.useCallback(({ data }) => {
            return images.map( image => {
                if(image.id === data.id){
                    return(                                 
                        <View style={{ flexDirection: 'row', height: 100 }}>
                            {
                                image.img.map((item, i) => (  
                                    <TouchableOpacity key={i} onPress={() => setImageSelectes(item)}> 
                                        <Image key={i} source={{ uri: item }} style={{  width: 100,  height: 100, resizeMode: 'contain' }}/>
                                    </TouchableOpacity>                                         
                                ))
                            }
                        </View>
                    )
                }
            })
    }, []);
    
    const ImageProduct = React.useCallback(({ data }) => {
        return (
            <View style={{ width: '100%', height: IMAGE_HEIGHT,justifyContent: 'center', alignItems:'center' }}>
                {
                    images.map( image => {
                        if(image.id === data.id){
                            return <Image key={data.id} source={{ uri: imageSelect ? imageSelect : image.img[0]}} style={{  width: '100%', height: IMAGE_HEIGHT, resizeMode: 'contain' }}/>
                        }
                    })
                }
            </View> 
        )
    }, [imageSelect]);
    

    const ProductSizes = React.useCallback(({ data }) => {
        return sizes.map(size => {
            if(size.id === data.id){
                return (
                    <View key={data.id}>
                        <Text style={{ fontSize: 16 }}>Tamanhos Disponíveis: </Text>
                        <View style={{ flexDirection:'row' }} >                        
                            { size.avaliable_sizes.map(item => (
                                <TouchableOpacity key={item} style={{ margin: 5, padding: 10, borderRadius: 5, borderWidth: 2, borderColor: '#3d5a80'}}>
                                    <Text style={{ fontSize: 20 }}>{item}</Text>
                                </TouchableOpacity>
                            )) }
                        </View>
                    </View>
                )
            }
        })
    }, []);
    
    return(
        <View style={{padding: 25, flex: 1 }}>
            <Flags data={item} />
            <ImageProduct data={item}/> 
            <ImagesProduct data={item}/>
            <View style={{ marginBottom: 20 }}>
                <Text numberOfLines={1} style={{ fontSize:fontSizer(width), fontWeight: 'bold', color: '#012a4a', marginBottom: 20 }}>
                    {item.name}
                </Text>
                <Text numberOfLines={1} style={{ fontSize: 35, fontWeight: 'bold', color: '#012a4a'}}>
                   R$<Text style={{ color: '#3d5a80'}}> 29,90</Text>
                </Text>
            </View>
            <ProductSizes data={item}/>
        </View>

    );
}

export default ProductFull;