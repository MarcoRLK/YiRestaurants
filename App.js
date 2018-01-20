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
    this.images = [
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

  ratingColorPicker = (rating) => {
    var color;
    if (rating < 7){
      color = '#CD6136';
    }else if (rating < 8){
      color = '#CBCD36';
    }else if (rating < 9){
      color = '#93CD36';
    }else{
      color = '#3CCD36';
    }
    return ({
      backgroundColor: color,
      borderRadius: 5, //change it to 10
      height: 25,
      width: 25,
      alignSelf: 'flex-end', //equivalent to 'float: right'
    });
  }

  photoPicker = (restaurantName) => {
    var imgIndex;
    switch(restaurantName){
      case 'Outback Steakhouse':
        imgIndex = 0;
        break;
      case 'Abbraccio Cucina Italiana':
        imgIndex = 1;
        break;
      case 'Gero':
        imgIndex = 2;
        break;
      case 'Pobre Juan':
        imgIndex = 3;
        break;
      case 'Divino Fogão':
        imgIndex = 4;
        break;
    }

    return (this.images[imgIndex]);

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
                    style={styles.imagePreview} source={this.photoPicker(item.name)}
                />
                <View>
                  <Text style={styles.restaurantName}> {item.name} </Text>
                  <View style={styles.horizontalAlignment}>
                    <Text style={styles.text}> {item.type}</Text>
                    <Text style={styles.text}> {item.price}</Text>
                    <Text style={this.ratingColorPicker(item.rating)}> {item.rating}</Text>
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