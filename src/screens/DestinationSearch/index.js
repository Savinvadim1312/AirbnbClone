import React, {useState} from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import SuggestionRow from "./SuggestionRow";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearchScreen = (props) => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder='Where are you going?'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests', { viewport: details.geometry.viewport });
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyDYnkl8rGqpQ9-6XjrH3ssqNSDiJHpULGw',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
