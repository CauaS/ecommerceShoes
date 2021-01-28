import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// import { Container } from './styles';

const Flags = ({ data }) => {
  return (
    <View style={{ marginVertical: 10 }}>
        <View style={{ flexDirection: 'row' }} key={data.id}>  
            { data.tags.bestseller && <AntDesign name="Trophy" size={24} color="black" style={{ marginLeft: 15 }}/>}
            { data.tags.no_stock && <MaterialIcons name="do-not-disturb" size={24} color="black" style={{ marginLeft: 15 }}/> }
            { data.tags.stock && <Entypo name="box" size={24} color="black" style={{ marginLeft: 15 }}/> }
            { data.tags.new && <MaterialIcons name="fiber-new" size={24} color="black" style={{ marginLeft: 15 }}/> }
        </View>
    </View> 
  );
}

export default Flags;