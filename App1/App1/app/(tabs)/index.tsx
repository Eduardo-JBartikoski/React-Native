import { Text, View } from 'react-native';
import { Welcome } from '@/components/ui/welcome';

function App1() {
  return (
    <View>
      <Text>Olá mundo!</Text>
      <Welcome name="Eduardo" age={28}/>
    </View>
  );
}

export default App1;