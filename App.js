import React, { Component } from 'react';
import {View, Image, FlatList, Text, List, ListItem, StyleSheet} from 'react-native';
import Header from './app/components/Header';
import Categories from './app/components/Categories';
import restaurantsData from './restaurants.json';

export default class App extends Component {

  constructor(props) {
 
    super(props);
 
    this.state = { 
    isLoading: true
    }
    this.images = 
    [
      require('./app/img/outback.png'),
      require('./app/img/abbraccio.png'),
      require('./app/img/gero.png'),
      require('./app/img/pobre_juan.png'),
      require('./app/img/divinofogão.png'),

    ]
  }

  flatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  render() {
    return (
      <View>
        <Header />
        <Categories />
        <FlatList
          data={ restaurantsData.list }
          ItemSeparatorComponent = {this.flatListItemSeparator}
          keyExtractor={item => item.name}
          renderItem = {({ item }) => 
            <View>
              <View style={styles.horizontalAlignment}>
                <Image
                    style={styles.imagePreview} source={this.images[0]}
                />
                <View>
                  <Text style={styles.restaurantName}> {item.name} </Text>
                  <View style={styles.horizontalAlignment}>
                    <Text style={styles.text}> {item.type}</Text>
                    <Text style={styles.text}> {item.price}</Text>
                    <Text style={styles.rating}> {item.rating}</Text>
                  </View>
                  <View style={styles.horizontalAlignment}>
                    <Text style={styles.text}> {item.distance}</Text>
                    <Text style={styles.text}> {item.neigborhood}</Text>
                  </View>
                </View>
              </View>
              <Text> { "\"" + item.comment + "\"" }</Text>
            </View>
          }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#717171',
    width: 100,
  },

  rating: {
    backgroundColor: '#3CCD36',
    borderRadius: 5, //change it to 10
    height: 25,
    width: 25,
    alignSelf: 'flex-end', //equivalent to 'float: right'
  },

  restaurantName: {
    fontSize: 20,
    color: '#D06600',
    marginTop: 10,
    marginBottom: 10,
  },

  imagePreview: {
    height: 80,
    width: 90,
    margin: 10,
  },

  horizontalAlignment: {
    flex: 1,
    flexDirection: 'row',
  },

})