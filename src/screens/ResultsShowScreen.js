import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import yelp from './api/yelp';
const ResultsShowScreen = ({navigation}) =>{
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);
    const getResults = async (id) => {
       const response = await yelp.get(`/${id}`);
       setResult(response.data);
    };
    useEffect (()=>{
        getResults(id);
    }, []);
    if(!result){
        return null;
    }
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data = {result.photos}
                keyExtractor = {(photo)=>photo}
                renderItem = {({item})=>{
                    return <Image source={{uri:item}} style={styles.image}/>
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width:300,
        height:200,
        borderRadius:4,
        marginBottom:5
    },
});

 export default ResultsShowScreen;