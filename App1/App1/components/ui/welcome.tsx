import {Text} from 'react-native';

type Props = {
    name: string;
    age: number;
}

export const Welcome = (props: Props) => {
    return(
        <Text>Bem Vindo, {props.name}, Você tem {props.age} anos de idade.</Text>
    );
}