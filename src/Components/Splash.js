import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Image, StatusBar
} from 'react-native';

class Splash extends Component {

    componentDidMount() {
        setTimeout(()=> {
            this.props.navigation.navigate('Login');
        }, 400);
    }

    render() {
        return (
            <View style= {{flex: 1}}>
                <StatusBar backgroundColor="red" barStyle="light-content" />
                <Image source= {require('../assets/images/splashScreen.png')} style= {{width: '100%', height: '100%'}} resizeMode= "cover" />
            </View>
        )
    }
}

export default Splash;