import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.bg}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#181D31',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});
