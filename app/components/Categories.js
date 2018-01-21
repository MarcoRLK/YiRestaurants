import React from 'react';
import restaurantsData from '../../restaurants.json';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Categories extends React.Component {

  render() {
    return (
      <View>
        <ScrollView
          horizontal={true}
          style={styles.horizontalScroll}
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <ImageBackground style={styles.scrollImage} source={require('../img/pizza_square.png')}>
              <Text style={styles.textImage}> Pizza </Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground style={styles.scrollImage} source={require('../img/café_square.png')}>
              <Text style={styles.textImage}> Cafés </Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground style={styles.scrollImage} source={require('../img/japanese_square.png')}>
              <Text style={styles.textImage}> Japonesa </Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground style={styles.scrollImage} source={require('../img/burger_square.png')}>
              <Text style={styles.textImage}> Burger </Text>
            </ImageBackground>
          </View>
          <View>
            <ImageBackground style={styles.scrollImage} source={require('../img/vegetarian_square.png')}>
              <Text style={styles.textImage}>Vegetariano</Text>
            </ImageBackground>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  horizontalScroll: {
    height: 100,
  },

  textImage: {
    flex: 1,
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    paddingTop: 50,
    backgroundColor: 'rgba(0, 0, 0, .3)',
  },

  scrollImage: {
    width: 70,
    height: 70,
    margin: 7,
  },

})