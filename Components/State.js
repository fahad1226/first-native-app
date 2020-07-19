import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button
  } from 'react-native';



const Fish = (props) => {
	return (
		<View>
			<Text>
				Hello this is {props.name}
			</Text>
		</View>
	);
}


const State = (props) => {
	const [isHungry, setIsHungry] = useState(true);
	const hungryHandler = () => {
		setIsHungry(false);
	}
	return (
		<View>
			<Text>
		     I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
		    </Text>
		    <Button
		    	onPress={hungryHandler}
		    	title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
		    />
		   <Fish name="Linux"/>
		   <Fish name="Windows"/>
		   <Fish name="Macintosh"/>
		</View>
	);
}




const styles = StyleSheet.create({
  processorStyle: {
  	paddingTop: '20',
    backgroundColor: 'gold'
  },
});


export default State;