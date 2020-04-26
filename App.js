import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {SafeAreaView} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Theme from './src/Components/theme';
import HomeStackScreen from './src/main/Home';
import CountryStackScreen from './src/main/Country';
import Box from './src/Components/Box';
import Text from './src/Components/Text';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Box flex={1} as={SafeAreaView}>
        <Box
          flexDirection='row'
          paddingTop={10}
          paddingBottom={10}
          paddingLeft={26}
          backgroundColor='main'
        >
        <Text fontSize={22} fontWeight='bold' color='#FFFFFF'>App Covid-19 </Text>
        </Box>
        <NavigationContainer>
          <Tab.Navigator
          initialRouteName='Home'
          >
            <Tab.Screen 
              name="Home" 
              component={HomeStackScreen} 
              options={{  
                tabBarLabel: 'Home',
                tabBarIcon: <MaterialCommunityIcons name="home" size={30} color="success" />
              }} 
            />
            <Tab.Screen 
              name="Country" 
              component={CountryStackScreen} 
              options={{ tabBarLabel: 'Countries' }} 
            />
          </Tab.Navigator>
        </NavigationContainer>
        </Box>
    </ThemeProvider>
  );
}
