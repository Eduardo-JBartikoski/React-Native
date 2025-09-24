import {Text,View} from 'react-native';
import { Styles } from './Styles';

export const Welcome = () => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>
                Bem-Vindo(a) ao APP!
            </Text>
        </View>
    )
}