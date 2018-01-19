import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Header extends React.Component {
    render() {
        return(
            <View>
            <View style={styles.header}>
                <Text style={styles.title}>Restaurantes</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>aaa</Text>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red',
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
        padding: 20,
        color: 'white'
    },
    header:{
        //backgroundColor:LinarGradient('#D0660', 'E69A09'),
        backgroundColor: 'black',
        alignItems:'center',
      },


});