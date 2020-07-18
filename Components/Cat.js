import React from 'react';
import { 
  StyleSheet,
  Text,
  View
  } from 'react-native';

const Cat = () => {
   return (
    <View style={styles.container}>
      <Text>I am also a cat!</Text>
      <SmellyCat />
    </View>
  );
}


const SmellyCat = () => {
	return (
		<View>
			<Text>
				Smelly cat smelly cat,what are you looking for...??
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: 'tomato',
    height: 20
  },
});

export default Cat;