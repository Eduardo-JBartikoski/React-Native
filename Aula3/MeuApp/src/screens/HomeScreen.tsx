import React from 'react';
import {View,Text,Button} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../components/Styles';


type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;


export default function HomeScreen(){
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return(
        <View style={Styles.container}>
            <Text style={Styles.title}>
                Bem-Vindo!
            </Text>
            <Button title='Ir para Perfil'
            onPress={() => navigation.navigate('Profile')}/>
        </View>


    )

}

