import * as React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
} from 'react-native';

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={{fontSize: 114}}>❤️</Text>
      <Text
        style={{
          marginTop: 10,
          fontWeight: '800',
          fontSize: 32,
        }}>
        Main
      </Text>
      <Text style={{fontStyle: 'italic', fontSize: 18}}>Main</Text>
    </View>
  );
};

export default Main;
