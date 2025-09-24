import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;


export default function HomeScreen(){
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Bem-Vindo!
            </Text>
            <Button title='Ir para Perfil'
            onPress={() => navigation.navigate('Profile')}/>
        </View>


    )

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#f2f2f2',
        padding: 20,
    },
    title: {
        fontSize:24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});