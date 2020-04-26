import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text} from 'react-native';

const CountryStack = createMaterialTopTabNavigator();

function CountryStackScreen({ navigation }){

    return(
        <Text> Country Screen working</Text>
    );
}

export default CountryStackScreen;