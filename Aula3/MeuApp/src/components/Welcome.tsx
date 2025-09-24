import {Text,View} from 'react-native';
import { Styles } from './Styles';

type Props = {
    name: string
    age: number
}
export const Welcome = (props: Props) => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>
                Bem-Vindo(a), {props.name} ao APP!. Você tem {props.age} anos de idade!
            </Text>
        </View>
    )
}