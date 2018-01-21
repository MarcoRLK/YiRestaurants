import React, { Component } from 'react';
import {View, Image, FlatList, Text, List, ListItem, StyleSheet, ActivityIndicator} from 'react-native';
import Header from './app/components/Header';
import Categories from './app/components/Categories';
import restaurantsData from './restaurants.json';

export default class App extends Component {

  state = {
    loaded: false,
  }

  constructor(props) {
 
    super(props);

    this.loader(v => this.setState({loaded: true}));
 
    this.images = [
      require('./app/img/outback.png'),
      require('./app/img/abbraccio.png'),
      require('./app/img/gero.png'),
      require('./app/img/pobre_juan.png'),
      require('./app/img/divinofogão.png'),
    ]
  }

  loader(cb){
    setTimeout(cb, 1500); // 1.5s - simulating server request
  }

  flatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#E0E0E0",
        }}
      />
    );
  }

  ratingColorPicker = (rating) => {
    var ratingColor;
    if (rating < 7){
      ratingColor = '#CD6136';
    }else if (rating < 8){
      ratingColor = '#CBCD36';
    }else if (rating < 9){
      ratingColor = '#93CD36';
    }else{
      ratingColor = '#3CCD36';
    }
    return ({
      backgroundColor: ratingColor,
      color: '#FFFFFF',
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

  priceStyler = (price) => {
    var priceSymbols = '';
    var fatedSymbols = '';
    for(var aux=1; aux<=4; aux++){
      if (price > 0){
        priceSymbols = priceSymbols + '$';
      }else{
        fatedSymbols = fatedSymbols + '$';
      }
      price -= 1;
    }

    return (
      <Text style={{color: '#717171'}}>
        { priceSymbols }
        <Text style={{color: '#A0A0A0'}}>
          {fatedSymbols}
        </Text>
      </Text>
    );
  }

  distanceFormatter = (distance) => {
    if (distance < 1000){
      return (distance + ' m');
    }else{
      distance = (distance/1000).toFixed(1);
      return (distance + ' km');
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        {this.state.loaded ? (
          // this is fired when it's loaded:
          <View>
          <Categories />
          <FlatList
            style={{ marginBottom: 150}}
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
                      <Text style={styles.text}> {this.priceStyler(item.price)}</Text>
                      <Text style={this.ratingColorPicker(item.rating)}> {(item.rating).toFixed(1)}</Text>
                    </View>
                    <View style={styles.horizontalAlignment}>
                      <Text style={styles.text}> {this.distanceFormatter(item.distance)}</Text>
                      <Text style={styles.text}> {item.neigborhood}</Text>
                    </View>
                  </View>
                </View>
                <Text> { "\"" + item.comment + "\"" }</Text>
              </View>
            }
          /> 
          </View>
        ) :
          //this is fired when it's still loading:
          <ActivityIndicator style={styles.screenLoader} size="large" color="#D06600" />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({

  text: {
    color: '#717171',
    width: 100,
  },

  screenLoader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  restaurantName: {
    fontSize: 20,
    color: '#D06600',
    marginTop: 10,
    marginBottom: 10,
  },

  imagePreview: {
    height: 80,
    width: 100,
    margin: 10,
  },

  horizontalAlignment: {
    flex: 1,
    flexDirection: 'row',
  },

})