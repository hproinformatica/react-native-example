import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Main from '../screens/MainScreen';

const Stack = createStackNavigator( 
    {
        MainScreen: MainScreen,
    },
    {
        initialRouteName: 'MainScreen',
    }
);

export default Stack;