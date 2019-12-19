import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from './components/SearchBar';
import ResultsList from '../screens/components/ResultsList';
import useResults from '../screens/hooks/useResults';
const SearchScreen = () =>{
    const [term,setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    const filterResultByPrice = (price) => {
        // price === '$' ||'$$' || "$$$"
        return results.filter(results => {
            return results.price === price;
        });
    }
    return (
        <View style={styles.container}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList title="Cost Effective" results = {filterResultByPrice('$')} />
                <ResultsList title="Bit Pricier" results = {filterResultByPrice('$$')} />
                <ResultsList title="Bit Spender" results = {filterResultByPrice('$$$')} />
            </ScrollView>
        </View>
    );
}
 const styles = StyleSheet.create({
    container: {
        flex:1
    }
 });

 export default SearchScreen;