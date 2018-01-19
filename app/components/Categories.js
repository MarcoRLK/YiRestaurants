import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    ScrollView,
} from 'react-native';

var restaurantsData = require('../../restaurants.json');

export default class Categories extends React.Component {
    render() {
        return(
            <ScrollView
                horizontal={true}
                style={styles.horizontalScroll}
                showsHorizontalScrollIndicator={false}
            >
                <View>                    
                    <ImageBackground style={styles.scrollImage} source={require('../img/abbraccio.png')}>
                        <Text style={{color:'white', textAlign:'center'}}> Test Text </Text>
                    </ImageBackground>
                </View>
                <View>                    
                    <ImageBackground style={styles.scrollImage} source={require('../img/abbraccio.png')}>
                        <Text style={{color:'white', textAlign:'center'}}> Test Text </Text>
                    </ImageBackground>
                </View>
                <View>                    
                    <ImageBackground style={styles.scrollImage} source={require('../img/abbraccio.png')}>
                        <Text style={{color:'white', textAlign:'center'}}> Test Text </Text>
                    </ImageBackground>
                </View>
                <View>                    
                    <ImageBackground style={styles.scrollImage} source={require('../img/abbraccio.png')}>
                        <Text style={{color:'white', textAlign:'center'}}> Test Text </Text>
                    </ImageBackground>
                </View>
                <View>                    
                    <ImageBackground style={styles.scrollImage} source={require('../img/abbraccio.png')}>
                        <Text style={{color:'white', textAlign:'center'}}> Test Text </Text>
                    </ImageBackground>
                </View>

            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    horizontalScroll: {
        height: 100,
        backgroundColor: 'skyblue',

    },

    scrollImage: {
        width: 75,
        height: 75,
        margin: 10,
    },

})