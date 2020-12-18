import React from "react";
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#f15454',
      indicatorStyle: {
        backgroundColor: '#f15454',
      }
    }}>
      <Tab.Screen name={"list"} component={SearchResults} />
      <Tab.Screen name={"map"} component={SearchResults} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
