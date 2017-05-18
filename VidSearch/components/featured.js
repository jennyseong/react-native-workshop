import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    NavigatorIOS,
    Text,
    Image,
    StatusBar,
  } from 'react-native';
import ImageView from './imageView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Featured = props => (
  <View style={styles.container}>
    <StatusBar
      backgroundColor="blue"
      barStyle="light-content"
    />
    <NavigatorIOS
      style={styles.container}
      translucent={false}
      barTintColor="#c4302b"
      titleTextColor="white"
      initialRoute={{
        title: 'Yay React',
        component: ImageView,
      }}
    />
  </View>
  );


module.exports = Featured;
