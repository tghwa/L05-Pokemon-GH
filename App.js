import React from 'react';
import { Text, View, StyleSheet, SectionList, Button, Alert, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const pokemonList = [
    {data:[
            {name: 'Pikachu', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png'},
            {name: 'Magnemite', image:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_81-2x.png'},
        ], icon:'bolt', title:"Electric", bgcolor:"yellow", color:"orange"},
    {data:[
            {name:'Squirtle', image:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7-2x.png'},
            {name:'Psyduck', image:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_54-2x.png'},
        ], icon:'droplet', title:"Water", bgcolor:"lightblue", color:"blue"},
    {data:[
            {name:'Charmender', image:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png'},
            {name:'Vulpix', image:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_37-2x.png'},
        ], icon:'fire', title:"Fire", bgcolor:"orange", color:"red"},
]

const styles = StyleSheet.create({
    headertext: {
        fontSize: 20,
        marginHorizontal: 20,
        borderWidth: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    opacityStyle: {
        borderWidth: 1,
        padding: 20,
        marginHorizontal: 20,
    },
    textStyle: {
        fontSize: 15,
        textAlign: 'center',
        flex: 1,
        fontWeight: 'bold',
    },
    imageStyle: {
        height: 250,
        width: 200,
        resizeMode: 'stretch',
        backgroundColor:'black',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={[styles.opacityStyle, {backgroundColor: 'lightgrey'}]}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Image source={{uri: item.image}} style={styles.imageStyle} />
            </View>
        </TouchableOpacity>
    );
};

const App = () => {
    const handleAddPokemon = () => {
        Alert.alert('Add Pokemon clicked!');
    };

    return (
        <View>
            <View style={styles.buttonContainer}>
                <Button title="Add Pokemon" onPress={handleAddPokemon} />
            </View>
            <SectionList
                sections={pokemonList}
                renderItem={renderItem}
                renderSectionHeader={({section: {icon, title, bgcolor, color}}) => (
                    <Text style={[styles.headertext, {backgroundColor: bgcolor, color: color}]}>
                        <Icon name={icon} size={20} />{title}
                    </Text>
                )}
            />
        </View>
    );
};

export default App;

