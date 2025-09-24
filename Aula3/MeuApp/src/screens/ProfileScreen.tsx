import React from "react";
import {View,Text} from 'react-native';
import { Styles } from '../components/Styles';

export default function ProfileScreen(){
    return(
        <View style={Styles.container}>
            <Text style={Styles.title}>
                Minha tela de perfil!
            </Text>
        </View>
    )
}