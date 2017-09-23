import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';

export default class Settings extends Component {
    render() {
        return(
            <View>
                <Text>Settings Page</Text>
                <Button title="Go to Login"/>
            </View>
        );
    }
}
