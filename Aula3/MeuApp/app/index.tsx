import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/HomeScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}