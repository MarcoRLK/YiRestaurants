import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class Header extends React.Component {
  render() {
    return (
      <LinearGradient colors={['#D06600', '#E69A09']}>
        <View style={styles.headerContainer}>
          <FontAwesome color={'white'} style={styles.icons}>{Icons.navicon}</FontAwesome>
            <Text style={styles.title}>Restaurantes</Text>
          <FontAwesome color={'white'} style={styles.icons}>{Icons.sliders}</FontAwesome>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
    padding: 20,
    color: 'white'
  },

  icons:{
    fontSize:30,
    marginHorizontal: 10,
    padding: 20,
  },
});