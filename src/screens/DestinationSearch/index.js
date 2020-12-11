import React, {useState} from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import styles from './styles.js';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import searchResults from '../../../assets/data/search';

const DestinationSearchScreen = (props) => {

  const [inputText, setInputText] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Input component*/}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/*  List of destination */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <Pressable onPress={() => navigation.navigate('Guests')} style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
