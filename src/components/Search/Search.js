import React from 'react';
import { View, Dimensions, TextInput } from 'react-native';
import DataContext from "../Context/Context"
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const WIDTH_SEARCH_VIEW  = width * .88;

const Search = () => {
    const { 
        types,
        setTypes,
        allProducts,
        setProductsFiltered 
    } = React.useContext(DataContext);

    const [searchText, setSearchText] = React.useState('');

    function handleSearchProducts(text) {
        const newTypes = types.map(item => {
            if(item.type === 'Todos') {
                return { ...item, isSelected: true }
            }else {
                return { ...item, isSelected: false }
            }
        });
        setTypes(newTypes);

        setSearchText(text)
        const listProducts = allProducts.filter(item => item.name.includes(text))
        setProductsFiltered(listProducts)
    }

    function handleErase() {
        setSearchText('')
        setProductsFiltered(allProducts)
    }

  return (
      <View style={{ height: 50, alignItems: 'center', marginTop: 10  }}>
          <View style={{ backgroundColor: "#e9ecef", height: 50, width: WIDTH_SEARCH_VIEW, borderRadius: 5, flexDirection: 'row', padding: 10 }}>
                <TouchableOpacity
                    style={{ width: 25, marginRight: 10 }}
                    onPress={() => handleErase('')}
                >
                    {
                        searchText 
                        ? <AntDesign name="closecircleo" size={24} color="#adb5bd" /> 
                        : <Ionicons name="ios-search" size={24} color="#adb5bd" /> 
                    }
                </TouchableOpacity>
                <View style={{ width: 320 }}>
                    <TextInput
                        value={searchText}
                        onChangeText={text => handleSearchProducts(text)}
                        onTextInput={() => handleSearchProducts}
                        style={{ fontSize: 20, color:'#adb5bd' }}
                        
                        placeholder='Buscar'
                    />
                </View>
          </View>
      </View>
  );
}

export default Search;