import React, { Component } from 'react';
import {View, Image} from 'react-native';
import Header from './app/components/Header';
import Categories from './app/components/Categories';
import RestaurantList from './app/components/RestaurantList';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Categories />
        <RestaurantList />
      </View>
    );
  }
}
