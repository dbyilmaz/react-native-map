import React, { Component } from 'react';
import { View, Text, Button, StatusBar} from 'react-native';

export default class Home extends Component {
    render() {

        return(
            <View style={{ backgroundColor: 'white', flex: 1}}>
                <StatusBar
                backgroundColor="rgba(123, 137, 248, 0.9)"
                barStyle="light-content"
            />
                <Text style={{ alignSelf: 'center', fontSize: 30, color:'crimson' }}>Home</Text>
            </View>
        );
    }
}
