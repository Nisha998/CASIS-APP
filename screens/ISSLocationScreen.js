import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Dimensions,
  SafeAreaView,
  Platform,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';

export default class IssLocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
  }

  componentDidMount() {
    this.getIssLocation();
    try {
      setInterval(async () => {
        this.getIssLocation();
      }, 5000);
    } catch (e) {
      console.log(e);
    }
  }

  getIssLocation = () => {
    axios
      .get('https://api.wheretheiss.at/v1/satellites/25544')
      .then((response) => {
        this.setState({ location: response.data });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  render() {
    if (Object.keys(this.state.location).length === 0) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Loading</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require('../assets/bg.png')}
            style={styles.backgroundImage}>
            <View style={styles.infoContainer}>
              <Image
                source={require('../assets/iss_icon.png')}
                style={styles.iconImage}></Image>
              <Text style={styles.infoText}>
                Latitude: {this.state.location.latitude}
              </Text>
              <Text style={styles.infoText}>
                Longitude: {this.state.location.longitude}
              </Text>
              <Text style={styles.infoText}>
                Altitude (KM): {this.state.location.altitude}
              </Text>
              <Text style={styles.infoText}>
                Velocity (KM/H): {this.state.location.velocity}
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
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  infoContainer: {
    flex: 0.2,
    backgroundColor: 'grey',
    marginTop: 200,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 40,
  },
  infoText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  iconImage: {
    position: 'absolute',
    height: 210,
    width: 210,
    resizeMode: 'contain',
    right: 60,
    top: -140,
  },
  container1: {
    flexDirection: 'row', // This ensures the buttons are placed side by side
    justifyContent: 'center', // Aligns the buttons horizontally in the center
    alignItems: 'center', // Aligns the buttons vertically in the center
    padding: 16,
    marginTop: 180,
  },
  button: {
    backgroundColor: '#ccccff',
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'bold',
  },
});
