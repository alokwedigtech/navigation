import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../src/screens/Home";
import About from "../src/screens/About";
import Contact from "../src/screens/Contact";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
}

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, ContactStackNavigator };