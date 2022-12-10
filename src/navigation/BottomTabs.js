import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import IconFeather from 'react-native-vector-icons/Feather';
import {COLORS} from '../utils/variables';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator screenOptions={styles.bottomTab}>
      <BottomTab.Screen
        name="HomeTab"
        component={Home}
        options={() => {
          return {
            tabBarShowLabel: true,
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
            tabBarShowLabel: true,
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
            tabBarShowLabel: true,
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
            tabBarShowLabel: true,
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
  iconFocused: {
    color: COLORS.white,
    fontSize: 35,
  },
  iconUnfocused: {
    color: COLORS.whiteLess,
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
  bottomTab: {
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      height: 60,
      backgroundColor: '#61616191',
    },
  },
});
