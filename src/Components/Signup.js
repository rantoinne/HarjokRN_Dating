import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, Image, StatusBar, Dimensions, TextInput
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get('window');

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sex: "male"
        }
    }

    setGender(sex) {
        this.setState({
            sex
        });
    }

    render() {
        return (
            <View style= {{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 20}}>

                <TouchableOpacity 
                    onPress= {()=> this.props.navigation.goBack()}
                    style= {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: width / 13, left: 10}}>
                    <Entypo name="chevron-small-left" size= {30} color= "black" />
                    <Text style= {{fontFamily: 'Poppins-Regular', fontSize:14}}>Login</Text>
                </TouchableOpacity>
                
                <Image source= {require('../assets/images/logo.png')} style= {{width: width - 100, height: width - 100, marginTop: -40}} resizeMode= "contain" />
                
                <View style= {{width, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: -40, paddingHorizontal: 10}}>
                    <View style= {{width: '50%', paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center'}}>
                        <TextInput
                            placeholder= "First name"
                            style= {{width: '100%', fontFamily: 'Poppins-Regular', padding: 10}}
                            underlineColorAndroid="#b2bec3"
                        />
                    </View>
                    <View style= {{width: '50%', paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center'}}>
                        <TextInput
                            placeholder= "Last name"
                            style= {{width: '100%', fontFamily: 'Poppins-Regular', padding: 10}}
                            underlineColorAndroid="#b2bec3"
                        />
                    </View>
                </View>

                <View style= {{width, paddingHorizontal: 20, marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                        placeholder= "Email"
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

                <View style= {{width, paddingHorizontal: 20, marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                        placeholder= "Date of Birth"
                        style= {{width: '100%', fontFamily: 'Poppins-Regular', padding: 10}}
                        underlineColorAndroid="#b2bec3"
                    />
                </View>

                <View style= {{width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 30, marginTop: 20}}>
                    <Text style= {{width: '50%', textAlign: 'left', fontFamily: 'Poppins=Regular', color: '#b2bec3'}}>Gender</Text>
                    <View style= {{width: '50%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        {
                            this.state.sex == "male" ? <MaterialCommunityIcons onPress= {()=> this.setGender("male")} name= "radiobox-marked" size={20} color= 'black' /> : 
                            <MaterialCommunityIcons onPress= {()=> this.setGender("male")} name= "radiobox-blank" size={20} color= 'black' />
                        }
                        <Text 
                            onPress= {()=> this.setGender("male")}
                            style= {{fontFamily: 'Poppins-Regular', marginRight: 30}}>
                            Male
                        </Text>
                        {this.state.sex == "female" ? <MaterialCommunityIcons onPress= {()=> this.setGender("female")} name= "radiobox-marked" size={20} color= 'black' /> : 
                            <MaterialCommunityIcons onPress= {()=> this.setGender("female")} name= "radiobox-blank" size={20} color= 'black' />}
                        <Text 
                            onPress= {()=> this.setGender("female")}
                            style= {{fontFamily: 'Poppins-Regular'}}>
                            Female
                        </Text>
                    </View>
                </View>

                <TouchableOpacity 
                    onPress= {()=> this.props.navigation.navigate('CreateProfile')}
                    style= {{width: width - 50, padding: 10, marginTop: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eb2f06'}}>
                    <Text style= {{fontFamily: 'Poppins-Regular', fontSize: 16, color: 'white'}}>
                        Register
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default Signup;