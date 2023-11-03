import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const CustomImage = ({ source }) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    margin: 5,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});

export default CustomImage;
