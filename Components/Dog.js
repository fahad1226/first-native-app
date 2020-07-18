import React from 'react'
import { 
  StyleSheet,
  Text,
  View
  } from 'react-native';


const Dog = (props) => {
  return (
    <View>
      <Text>
        I'm a dog,my name is {props.name}
      </Text>
    </View>
  );
}

export default Dog;