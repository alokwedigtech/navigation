import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import Profiles from './profile'



function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed!</Text>
        </View>
    );
}

function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile!</Text>
        </View>
    );
}

function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications!</Text>
        </View>
    );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="capsules" size={30} color="#6a6a6a" />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user-alt" size={30} color="#6a6a6a" />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="network-wired" size={30} color="#6a6a6a" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navi() {
    return (
        <NavigationContainer>
            <Stack.Screen name="Profiles" component={Profiles} />
            <MyTabs />
        </NavigationContainer>
    );
}
