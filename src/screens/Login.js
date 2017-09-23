import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
        NavigationActions.navigate({ routeName: 'Authenticated'}),
    ]
});

export default class Login extends Component {
    render() {
        const { dispatch } = this.props.navigation;
        return(
            <View>
                <View style={{  justifyContent: 'center', margin: 150 }}>
                    <Text style={{ alignSelf: 'center', fontSize: 30, color:'crimson', paddingBottom:50 }}>Login</Text>
                    <Button  title="Go to Home" onPress={ () => dispatch(resetAction)}/>
                </View>
            </View>
        );
    }
}


