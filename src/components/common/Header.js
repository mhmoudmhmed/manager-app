/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation';
const Header = () => {
  return (
    <SafeAreaView style={styles.container} forceInset={{ top:'always' }}>
      <Text style={styles.header}> Redux Tech Stack </Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F8F8F8',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    paddingTop:15,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.2,
    elevation:2,
    position:'relative',
  },
  header: {
    fontSize:16,
    color:'red',
  },
});

Header.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default Header;
