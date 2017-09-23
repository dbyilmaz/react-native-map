import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
        NavigationActions.navigate({ routeName: 'Unauthenticated'}),
    ]
});

export default class Login extends Component {
    render() {
        const { dispatch } = this.props.navigation;
        return(
            <View style={{ backgroundColor: 'white', flex: 1}}>
                <Text style={{ alignSelf: 'center', fontSize: 30, color:'crimson',paddingBottom:50}}>Profile</Text>
                <View style={{  justifyContent: 'center', margin: 150 }}>
                <Button style={{ margin:150 }} title="Go to Login" onPress={ () => dispatch(resetAction)}/>
                </View>
            </View>
        );
    }
}


