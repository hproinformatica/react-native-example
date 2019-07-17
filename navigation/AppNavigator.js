import React from 'react';
import { createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

// Auth
import AuthScreen from '../screens/auth/AuthScreen';

// Examples
import DefaultComponentsScreen from '../screens/examples/DefaultComponentsScreen';
import RNPaperScreen from '../screens/examples/RNPaperScreen';

// Cli
import Cli01Screen from '../screens/cli/Cli01Screen';
import Cli02Screen from '../screens/cli/Cli02Screen';
import Cli03Screen from '../screens/cli/Cli03Screen';

// Pev
import Pev01Screen from '../screens/pev/Pev01Screen';
import Pev02Screen from '../screens/pev/Pev02Screen';
import Pev03Screen from '../screens/pev/Pev03Screen';

const ExamplesStack = createStackNavigator( 
    {
        DefaultComponentsScreen: DefaultComponentsScreen,
        RNPaperScreen: RNPaperScreen,
    },
    {
        initialRouteName: 'DefaultComponentsScreen',
    }
);

const CliStack = createStackNavigator( 
    {
        Cli01Screen: Cli01Screen,
        Cli02Screen: Cli02Screen,
        Cli03Screen: Cli03Screen,
    },
    {
        initialRouteName: 'Cli01Screen',
    }
);

const PevStack = createStackNavigator( 
    {
        Pev01Screen: Pev01Screen,
        Pev02Screen: Pev02Screen,
        Pev03Screen: Pev03Screen,
    },
    {
        initialRouteName: 'Pev01Screen',
    }
);

const DrawerNavigator = createDrawerNavigator(
    {
        ExamplesStack: {
            screen: ExamplesStack,
            navigationOptions: {
                drawerLabel: 'Exemplos',
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome name="clipboard" size={22} color={tintColor} />
                ),
            }
        },
        CliStack: {
            screen: CliStack,
            navigationOptions: {
                drawerLabel: 'Clientes',
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome name="users" size={22} color={tintColor} />
                ),
            }
        },
        PevStack: {
            screen: PevStack,
            navigationOptions: {
                drawerLabel: 'Pedidos',
                drawerIcon: ({ tintColor }) => (
                    <FontAwesome name="truck" size={22} color={tintColor} />
                ),
            }
        },
    },
    {
        initialRouteName: 'ExamplesStack',
        contentOptions: {
            activeTintColor: '#00a099',
        }
    }
);


const AppNavigator = createSwitchNavigator(
    {
        AuthScreen: AuthScreen,
        DrawerNavigator: DrawerNavigator,
    },
    {
        initialRouteName: 'AuthScreen',
    }
);

export default AppNavigator;