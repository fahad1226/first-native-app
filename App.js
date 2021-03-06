import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Cat from './Components/Cat'
import Dog from './Components/Dog'
import BirdsImage from './Components/BirdsImage'
import State from './Components/State'
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
  } from 'react-native';



export default function App() {
  const name = 'Fahad Bin Munir';
  const fullName = (firstName, secondName, thirdName) => {
    return firstName + " " + secondName + " " + thirdName;
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.me}>
          Hello this is {fullName("Fahad", "Bin", "Munir")}
        </Text>
        <TextInput
          style={styles.inputStyle}
          defaultValue="Dhaka!"
        />
        <Cat />
        <Dog name="white"/>
        <Dog name="black"/>
        <BirdsImage />
        <State name="hungry"/>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  me: {
    backgroundColor: 'orange',
    padding: 20
  },
  inputStyle: {
    height: 40,
    width: 80,
    borderColor: 'green',
    borderWidth: 1
  }
});
