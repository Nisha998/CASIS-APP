import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';

export default class WeatherScreen extends Component {
  constructor() {
    super();
    this.state = {
      weather: '',
    };
  }

  getWeather = async () => {
    //change latitude and longitude
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          weather: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    this.getWeather();
  };

  render() {
    if (this.state.weather === '') {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>
              Weather Forecast
            </Text>
            <Image
              style={styles.cloudImage}
              source={require('../assets/clouds.png')}
            />
            <View style={styles.textContainer}>
            <Text style={{ fontSize: 18}}>
              {this.state.weather.main.temp}&deg;C
            </Text>
            <Text style={{ fontSize: 20, margin:10}}>
              humidity : {this.state.weather.main.humidity}
            </Text>
            <Text style={{fontSize: 20}}>
              {this.state.weather.weather[0].description}
            </Text>
          </View>
          <View style={styles.container1}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('ISS')}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('LoginScreen')}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>  
          
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
  subContainer : { 
    flex: 1, 
    borderWidth: 1, 
    alignItems: 'center' 
    },
    title:{ 
      marginTop: 50, 
      fontSize: 30,
      fontWeight: '550' 
    },
    cloudImage :{ 
      width: 200, 
      height: 200, 
      marginTop: 30 
    },
    textContainer : { 
      flex: 1,
      alignItems: 'center', 
      flexDirection:'row', 
      marginTop:-5
    },
    container1: {
    flexDirection: 'row', // This ensures the buttons are placed side by side
    justifyContent: 'center', // Aligns the buttons horizontally in the center
    alignItems: 'center', // Aligns the buttons vertically in the center
    padding: 16,
    marginTop: 160,
  },
  button: {
    backgroundColor: '#ccccff',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'bold',
  },
});
