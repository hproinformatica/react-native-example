import React from 'react';
import { createStackNavigator } from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import DefaultComponentsScreen from '../screens/DefaultComponentsScreen';
import RNPaperScreen from '../screens/RNPaperScreen';

const AppNavigator = createStackNavigator( 
    {
        MainScreen: MainScreen,
        DefaultComponentsScreen: DefaultComponentsScreen,
        RNPaperScreen: RNPaperScreen,
    },
    {
        initialRouteName: 'MainScreen',
    }
);

export default AppNavigator;