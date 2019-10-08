import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, Image, StatusBar, Dimensions, TextInput
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-picker';


const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

const { width, height } = Dimensions.get('window');

class CreateProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sex: "male",
            avatarSource: '',
            isChosen: false
        }
    }

    setGender(sex) {
        this.setState({
            sex
        });
    }

    choosePic = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source,
                isChosen: true
              });
            }
          });
    }

    render() {
        return (
            <View style= {{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 20}}>

                <TouchableOpacity 
                    onPress= {()=> this.props.navigation.goBack()}
                    style= {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: width / 13, left: 10}}>
                    <Entypo name="chevron-small-left" size= {30} color= "black" />
                </TouchableOpacity>
                
                <Text style= {{fontFamily: 'Poppins-SemiBold', fontSize: 18, marginTop: 20}}>Create Profile</Text>

                {
                    this.state.isChosen ? (
                        <TouchableOpacity 
                            onPress= {()=> this.choosePic()}
                            style= {{width: width / 3.5, height: width / 3.5, borderRadius: width / 7, justifyContent: 'center', alignItems: 'center', backgroundColor: '#b2bec3', elevation: 8}}>
                            <Image source= {{uri: this.state.avatarSource.uri }}
                                style= {{width: width / 3.5, height: width / 3.5, borderRadius: width / 7}}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity 
                            onPress= {()=> this.choosePic()}
                            style= {{width: width / 3.5, height: width / 3.5, borderRadius: width / 7, justifyContent: 'center', alignItems: 'center', backgroundColor: '#b2bec3', elevation: 8}}>
                            <Entypo name="plus" color="black" size={70} style= {{alignSelf: 'center'}} />
                        </TouchableOpacity>
                    )
                }
                
                <View style= {{width, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10}}>
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

                <TouchableOpacity style= {{width: width - 50, padding: 10, marginTop: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eb2f06'}}>
                    <Text style= {{fontFamily: 'Poppins-Regular', fontSize: 16, color: 'white'}}>
                        Register
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default CreateProfile;