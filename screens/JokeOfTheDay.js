import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class JokeOfTheDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    };
  }

  fetchJokes = async () => {
    try {
      const response = await axios.get(
        'https://official-joke-api.appspot.com/jokes/ten'
      );
      this.setState({ jokes: response.data });
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  componentDidMount() {
    this.fetchJokes();
  }

  render() {
    const { jokes } = this.state;

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/funny.png')} />
        {jokes.map((joke, index) => (
          <Text key={index} style={styles.jokeText}>
            {joke.setup}
            {'\n'}
            {joke.punchline}
          </Text>
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.fetchJokes()
          }}>
          <Text style={styles.buttonText}>Fetch Jokes</Text>
        </TouchableOpacity>

        <View style={styles.logoutButtonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('ISS')}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logoutButtonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ccccff',
  },
  jokeText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontWeight: '200',
    fontSize: 20,
    fontFamily: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 30,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10,
  },
  logoutButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  
});
