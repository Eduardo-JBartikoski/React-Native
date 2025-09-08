import React from 'react';
import { Text, StyleSheet } from 'react-native';


export const HelloElement = () => {
  return (
    <Text style={styles.textInfo}>Hello World</Text>
  );
};

const styles = StyleSheet.create({
  textInfo: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
    marginTop: 20
  }
});