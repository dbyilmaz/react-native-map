import React, { Component } from 'react';
import { View, Text, Button, Image, Touchable} from 'react-native';
import MapView from 'react-native-maps';
import faker from 'faker';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
        NavigationActions.navigate({ routeName: 'Authenticated'}),
    ]
});

export default class Map extends Component {
    state = {
        longitude: 32.81491,
        latitude: 39.78377,
        longitudeDelta: 0.07,
        latitudeDelta: 0.01,
        positions: [],
        poly: []
    };

    componentDidMount = () => {
        const { getCurrentPosition, watchPosition } = navigator.geolocation;
        getCurrentPosition((position) => {
            this.state.positions.push(position.coords);
            this.state.poly.push({latitude: position.coords.latitude, longitude: position.coords.longitude });
            this.setState({  latitude: position.coords.latitude, longitude: position.coords.longitude, positions: this.state.positions, poly: this.state.poly });

        });

        watchPosition((position) => {
            this.state.positions.push(position.coords);
            this.state.poly.push({latitude: position.coords.latitude, longitude: position.coords.longitude });
            this.setState({  latitude: position.coords.latitude, longitude: position.coords.longitude, positions: this.state.positions,  poly: this.state.poly });

        });
    };

    componentWillUnmount() {
        navigator.geolocation.clearWatch();
    }

    getNearCustomerList() {
        const { navigate } = this.props.navigation;


        const {  positions } = this.state;
        console.log(faker.internet.avatar());
       return( positions.map(function (key, index) {
            const region = {
                latitude: key.latitude,
                longitude: key.longitude,
            };
            return (

                <MapView.Marker key={index} coordinate={region} title={ faker.name.findName()} onPress={ () =>{ } } 	 >
                    <Image
                        style={{ width: 40, height: 40 }}
                        source={{uri:"https://cdn4.iconfinder.com/data/icons/ballicons-2-new-generation-of-flat-icons/100/map-256.png"}}>
                    </Image>
                </MapView.Marker>
            );


        })
    )

    }

    getRoadMap() {
        const {  poly  } = this.state;
        const road = [];
        poly.map(function (key, index) {
            road.push({ latitude: key.latitude, longitude: key.longitude})
        });

return(
    <MapView.Polyline
        coordinates={road}
        strokeColor="#FF0000" // default color red
        strokeWidth={5}
        lineCap="round"
        geodesic={ true }
        miterLimit={8}
    />
);

    }

    render() {
        const { longitude, latitude, longitudeDelta, latitudeDelta, poly  } = this.state;
        console.log(Object.values(poly));
        const region = {
            longitude, latitude,longitudeDelta, latitudeDelta
        };


        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={region}
            >
                { this.getNearCustomerList() }
                { this.getRoadMap() }
            </MapView>
        );
    }
}
