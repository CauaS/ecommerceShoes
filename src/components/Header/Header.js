import React from 'react';
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import DataContext from "../Context/Context";
import { normalFontSizer } from "../../utils/index"

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Constants  from "expo-constants";
const { width } = Dimensions.get('window');

const Header = ({ navigation }) => {
    const { cart } = React.useContext(DataContext);
    
    return (
        <View style={{ marginTop: Constants.statusBarHeight, height: 65, backgroundColor:"#fff" }}>
            <View style={{ flexDirection: 'row' , justifyContent: 'space-between'}} >                                        
                <View style={{ marginLeft: 20, marginTop: 15 }}>
                    <Ionicons name="ios-menu-outline" size={36} color="black" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ position: 'relative', marginRight: 20, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                        { cart && 
                            <View style={{ zIndex: 5, position: 'absolute' , top: -16, left: 8 , backgroundColor: '#012a4a', paddingHorizontal: 6, paddingVertical: 4, borderRadius: 50 }}>
                                <Text style={{ fontSize: normalFontSizer(width), color: '#fff', fontWeight: 'bold'}}>{cart.length}</Text>
                            </View>
                        }
                        <Feather name="shopping-cart" size={24} color="black" />
                    </TouchableOpacity>
                    <View  style={{ marginRight: 20, marginTop: 15 }}>
                        <Image 
                            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'}} 
                            style={{ width: 35 , height: 35 , borderRadius: 50, resizeMode: 'cover' }}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Header;