import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Login, Home, Profile, Map } from './screens'


const Unauthenticated = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({ title: 'Login' })
    },
});

const Authenticated = TabNavigator({
        Home: {
            screen: Home,
            navigationOptions: () => ({ title: 'Home' })
        },
        Map: { screen: Map },
        Profile: {
            screen: Profile,
            navigationOptions: () => ({ title: 'Profile' })
        },
    },
    { tabBarPosition: 'bottom', tabBarOptions: { style: { backgroundColor: "#7B89F8" } } }
);

export const App = StackNavigator({
        Unauthenticated: { screen: Unauthenticated },  // navigator
        Authenticated: { screen: Authenticated },  // navigator
    },
    {
        headerMode: 'none'
    });

