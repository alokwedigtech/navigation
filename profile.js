import React, { useState } from 'react';
import { StyleSheet, Button, Image, Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'



const Profile = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onPressLogin = () => {
        console.log('TAG', 'button click')
        Alert.alert(`hey ${email} entered password is ${password}`), () => {
            setPassword("")
            setEmail("")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <TouchableOpacity>
                    <Feather style={styles.profileicons} name="phone-call" size={35} color="#808080" />
                </TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://yt3.ggpht.com/ytc/AAUvwngsMYKVJenoA3m07HTBPjzMjDsuDMgzFi6L1g0Z=s900-c-k-c0x00ffffff-no-rj',
                    }}
                    style={styles.profileimage}
                    resizeMode="stretch"
                />
                <TouchableOpacity>
                    <Icon style={styles.profileicons} name="message1" size={35} color="#808080" />
                </TouchableOpacity>
            </View>


            <View style={styles.profilename}>
                <Text style={styles.name}>Alexander Wolfe</Text>
                <Text style={styles.typedr}>Cardiologist</Text>
                <Text style={styles.rating}>5.0 (234 reviewrs)</Text>
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>BOOK APPOINTMENT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.options}>
                <Icon name="user" size={20} color="#808080" />
                <Text style={styles.optionText}>Persoanl Information</Text>
                <MaterialIcons name="arrow-forward-ios" size={20} color="#808080" />

            </TouchableOpacity>

            <TouchableOpacity style={styles.options}>
                <Icon name="home" size={20} color="#808080" />
                <Text style={styles.optionText}>Working adress</Text>
                <MaterialIcons name="arrow-forward-ios" size={20} color="#808080" />

            </TouchableOpacity>

            <TouchableOpacity style={styles.options}>
                <Icon name="staro" size={20} color="#808080" />
                <Text style={styles.optionText}>Reviewer</Text>
                <MaterialIcons name="arrow-forward-ios" size={20} color="#808080" />
            </TouchableOpacity>

            {/* <View style={styles.bottomicons}>
                <TouchableOpacity>
                    <FontAwesome name="capsules" size={30} color="#6a6a6a" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome name="user-alt" size={30} color="#6a6a6a" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome name="network-wired" size={30} color="#6a6a6a" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon name="bars" size={30} color="#6a6a6a" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon name="user" size={30} color="#6a6a6a" />
                </TouchableOpacity>
            </View> */}


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileicons: {
        marginTop: 70,
        margin: 30
    },
    profileimage: {
        height: 170,
        width: 160,
        borderRadius: 300,
    },

    info: {
        flexDirection: 'row',
        // marginTop: 0
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#799af3",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    loginText: {
        color: "white"
    },
    bottomicons: {
        width: "100%",
        flexDirection: 'row',
        // height: 50,
        position: 'absolute',
        bottom: 0,
        justifyContent: "space-around",
        flexDirection: 'row',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,

        elevation: 4,
        marginTop: 50
    },
    options: {
        width: "80%",
        borderRadius: 8,
        height: 50,
        alignItems: "center",
        justifyContent: "space-around",
        margin: 7,
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    optionText: {
        color: "#000"
    },
    profilename: {
        margin: 20,
        flexDirection: 'column',
        alignItems: 'center'
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#222222"
    },
    typedr: {
        color: '#b5b5b5'
    },
    rating: {
        color: '#b5b5b5'
    }

});
export default Profile
