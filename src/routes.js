import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./components/Header/Header";


import Home from './screens/Home';

const Stack = createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        header: (props) =>  <Header {...props} /> ,
                        headerTitle: false
                    }} 
                    name="Home" 
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default Routes;