import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HelloElement } from '../../components/HelloElement'
import styles from '../AppStyle'


function App() {
  const element = <Text style={styles.textInfo}>Hello World</Text>
  return (
    <View style={styles.container}>
        {element}
      </View>
  );
}



export default App;