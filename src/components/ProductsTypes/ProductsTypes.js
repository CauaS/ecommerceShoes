import React from 'react';
import { View, ScrollView, Text,TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { biggerFontSizer } from "../../utils/index";

const { width, height } = Dimensions.get('window')
const ProductsTypes = ({ data, onChangeType }) => { 

    const style = StyleSheet.create({
        selected: {
            fontSize: biggerFontSizer(width), 
            fontWeight:'bold', 
            color: '#012a4a'     
        },
        not_selected: {
            fontSize: biggerFontSizer(width), 
            fontWeight:'bold', 
            color: '#adb5bd'  
        }
    })

    return (
            <View style={{ flexDirection: 'row', marginBottom: 25 }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        data.map( (item, idx) => (
                            <TouchableOpacity 
                                key={idx} 
                                style={{marginHorizontal: 20 }}
                                onPress={() => onChangeType(item)} 
                            >
                                <Text
                                    style={[item.isSelected ? style.selected : style.not_selected]}
                                > 
                                        {item.type} 
                                </Text>
                            </TouchableOpacity>
                            
                        ))
                    }
                </ScrollView>
            </View>
    )
}

export default ProductsTypes;