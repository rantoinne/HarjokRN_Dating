import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, Image, StatusBar, Dimensions, TextInput
} from 'react-native';
import { Switch } from 'react-native-switch';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const { width, height } = Dimensions.get('window');

class Login extends Component {

    render() {
        return (
            <View style= {{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 20}}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Image source= {require('../assets/images/logo.png')} style= {{width: width - 100, height: width - 100, marginTop: -40}} resizeMode= "contain" />
                <View style= {{width, paddingHorizontal: 20, marginTop: -20, justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                        placeholder= "Username"
                        style= {{width: '100%', fontFamily: 'Poppins-Regular', padding: 10}}
                        underlineColorAndroid="#b2bec3"
                    />
                </View>
                <View style= {{width, paddingHorizontal: 20, marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                        placeholder= "Password"
                        secureTextEntry
                        style= {{width: '100%', fontFamily: 'Poppins-Regular', padding: 10}}
                        underlineColorAndroid="#b2bec3"
                    />
                </View>

                <Text style= {{fontFamily: 'Poppins-SemiBold', fontSize: 14, color: 'blue', width, padding: 20, textAlign: 'right'}}>
                    Forgot Password?
                </Text>

                <TouchableOpacity 
                    onPress= {()=> this.props.navigation.navigate('Signup')}
                    style= {{width: width - 50, padding: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eb2f06'}}>
                    <Text style= {{fontFamily: 'Poppins-Regular', fontSize: 16, color: 'white'}}>
                        Login
                    </Text>
                </TouchableOpacity>

                <Text style= {{fontFamily: 'Poppins-Regular', fontSize: 18, color: '#b2bec3', marginTop: 20}}>
                    OR
                </Text>

                <TouchableOpacity 
                    onPress= {()=> this.props.navigation.navigate('Signup')}
                    style= {{width: width - 50, marginTop: 20, flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e3799'}}>
                    <FontAwesome name="facebook" color="white" size= {24} style= {{marginRight: 6}} />
                    <Text style= {{fontFamily: 'Poppins-Regular', fontSize: 16, color: 'white'}}>
                        Login with Facebook
                    </Text>
                </TouchableOpacity>
                <View style= {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                    <Text style= {{fontFamily: 'Poppins-Regular', fontSize: 14, color: "#b2bec3"}}>Not a member yet? </Text>
                    <Text 
                        onPress= {()=> this.props.navigation.navigate('Signup')}
                        style= {{fontFamily: 'Poppins-Regular', fontSize: 14, color: "darkblue"}}>
                        Sign up
                    </Text>
                </View>
            </View>
        )
    }
}

export default Login;