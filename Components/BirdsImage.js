import React from 'react'

import { 
  StyleSheet,
  Text,
  View,
  Image
  } from 'react-native';


const BirdsImage = () => {
	return (
	    <View>
	      <Text>some butiful pictures of Birds</Text>
	        <Image
	        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
	        style={{width: 200, height: 200}}
	      	/>
	      	<Image 
	      	source={{ uri: "https://picsum.photos/200/300" }}
	      	style={{width: 200, height: 300}}
	      	/>
	    </View>
  	);
}

export default BirdsImage;