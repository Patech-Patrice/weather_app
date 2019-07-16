import React from 'react';
import { StyleSheet, View, ImageBackground, Text, KeyboardAvoidingView, Platform} from 'react-native';

import getImageForWeather from './utils/getImageForWeather.js'
import SearchInput from './components/SearchInput';


// in this component we're importing a getImageForWeather method from our utils directory which returns a specifric image from the assets directory depending on the weather type.
// the ImageBackground component is a view with an image nested within.  The source prop accepts an image location; uses the prop style for styling the view container and the prop imagestyle for styling the image itself.

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
      location: 'San Francisco',
    };
  }

  handleUpdateLocation = city => {
    this.setState({
      location: city,
    });
  };



  render() {
    const { location } = this.state;


    return  (

    <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding"
      >
        <ImageBackground 
         source={getImageForWeather('Clear')}
         style={styles.imageContainer}
         imageStyle={styles.image} 
         >

        <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>San Francisco</Text>
             <Text style={[styles.smallText, styles.textStyle]}> Light Cloud</Text>
             <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
             
             <SearchInput 
                placeholder="Search any City"
                onSubmit={this.handleUpdateLocation} 
              />
        </View>     
    </ImageBackground>  
        
</KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
