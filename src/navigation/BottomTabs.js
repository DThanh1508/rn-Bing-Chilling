import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import IconFeather from 'react-native-vector-icons/Feather';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        tabBarStyle: {position: 'absolute', bottom: 0, height: 60},
      }}>
      <BottomTab.Screen
        name="HomeTab"
        component={Home}
        options={() => {
          return {
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <IconFeather
                style={focused ? styles.iconFocused : styles.iconUnfocused}
                name="home"
              />
            ),
            headerShown: false,
          };
        }}
      />
      <BottomTab.Screen
        name="HomeTab2"
        component={Home}
        options={() => {
          return {
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <IconFeather
                style={focused ? styles.iconFocused : styles.iconUnfocused}
                name="home"
              />
            ),
            headerShown: false,
          };
        }}
      />
      <BottomTab.Screen
        name="HomeTab3"
        component={Home}
        options={() => {
          return {
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <IconFeather
                style={focused ? styles.iconFocused : styles.iconUnfocused}
                name="home"
              />
            ),
            headerShown: false,
          };
        }}
      />
      <BottomTab.Screen
        name="HomeTab4"
        component={Home}
        options={() => {
          return {
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <IconFeather
                style={focused ? styles.iconFocused : styles.iconUnfocused}
                name="home"
              />
            ),
            headerShown: false,
          };
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  iconCenter: {
    backgroundColor: '#4157FF',
    padding: 10,
    fontSize: 30,
    borderRadius: 4,
    color: '#FFFFFF',
    position: 'absolute',
    top: -20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.58,
    shadowRadius: 6.0,
    elevation: 6,
  },
  iconFocused: {
    color: '#4157FF',
    fontSize: 35,
    backgroundColor: '#FFC618',
    padding: 10,
    borderRadius: 50,
  },
  iconUnfocused: {
    color: '#090F4773',
    fontSize: 30,
  },
  newNotification: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: '#FF0000',
    right: 5,
    borderRadius: 5,
  },
});
