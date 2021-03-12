import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="capsules" size={30} color="#6a6a6a" />
                ),
            }}
                name="Home" component={MainStackNavigator} />
            <Tab.Screen options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="capsules" size={30} color="#6a6a6a" />
                ),
            }} name="Contact" component={ContactStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;