import React from 'react';
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, StatusBar } from 'react-native';

import DataContext from "../components/Context/Context";

import Search from "../components/Search/Search";
import ProductsTypes from "../components/ProductsTypes/ProductsTypes";
import ProductCard from '../components/ProductList/ProductCard'

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const { width } = Dimensions.get('window');
const WIDTH_TITLE  = width * .88;

const Home = () => {
    const  { 
        list, 
        setList,
        types,
        setTypes,
        allProducts,
        productsFiltered,
        setProductsFiltered 
    } = React.useContext(DataContext);

    function onChangeType(data){
        const newTypes = types.map(item => {
            if(data.type === item.type) {
                return { ...item, isSelected: true }
            }else {
                return { ...item, isSelected: false }
            }
        });
        setTypes(newTypes);  

        const newProductsFiltered = allProducts.filter(product => {
            const selectedType = newTypes.filter(type => type.isSelected === true)[0].type;
            return product.type === selectedType
        })

         if(newProductsFiltered.length === 0){
            return setProductsFiltered(allProducts)
         }

        setProductsFiltered(newProductsFiltered);        
    }

  return (      
    <SafeAreaView style={{  backgroundColor: '#fff', flex: 1 }}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
        <Search />
        <View style={{ marginLeft: 22 , marginVertical: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width:WIDTH_TITLE }}>
            <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#012a4a'}}>Calçados</Text>
            <TouchableOpacity style={{  padding: 5}} onPress={() => setList(list =>!list)}>
                { list
                    ? <MaterialCommunityIcons name="view-grid" size={24} color="black" />
                    : <FontAwesome name="th-list" size={24} color="black" />
                }
            </TouchableOpacity>
        </View>
        <ProductsTypes data={types} onChangeType={onChangeType}/>
        <ProductCard layout={list} data={productsFiltered}/>
    </SafeAreaView>
  );
}

export default Home;