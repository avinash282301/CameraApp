import React, { useState, useEffect } from 'react';
import { View, ScrollView, Button } from 'react-native';
import RNFS from 'react-native-fs';
import CustomImage from './CustomImage';

const GalleryScreen = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Load images from the specified folder
    const imageFolder = RNFS.DocumentDirectoryPath;
    RNFS.readDir(imageFolder)
      .then((result) => {
        const imagePaths = result.map((item) => item.path);
        setImages(imagePaths);
      })
      .catch((error) => {
        console.error(`Error reading images: ${error}`);
      });
  }, []);

  return (
    <ScrollView>
      {images.map((imagePath) => (
        <CustomImage key={imagePath} source={{ uri: `file://${imagePath}` }} />
      ))}
      <Button title="Clear All Data"  />
    </ScrollView>
  );
};

export default GalleryScreen;
