import React, { useState, useEffect, useRef } from 'react';
import { View, Button, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const CameraScreen = () => {
    const camera = useRef(null)
    const devices = useCameraDevices();
    const device = devices.find((d) => d.position === 'back');
    


    const [showCamera, setShowCamera] = useState(false);
    const [imageSource, setImageSource] = useState('');

    useEffect(() => {
        async function getPermission() {
            const newCameraPermission = await Camera.requestCameraPermission();
            console.log(newCameraPermission);
        }
        getPermission();
    }, []);

    const capturePhoto = async () => {
        if (camera.current !== null) {
            const photo = await camera.current.takePhoto({});
            setImageSource(photo.path);
            setShowCamera(false);
            console.log(photo.path);
        }
    };

    if (!device || !device.available) {
        return <Text>Camera not available</Text>;
      }
      


    return (
        <View style={styles.container}>
            {showCamera ? (
                <>
                    <Camera
                        ref={camera}
                        style={StyleSheet.absoluteFill}
                        device={device}
                        isActive={showCamera}
                        photo={true}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.camButtom} onPress={() => capturePhoto()} />
                    </View>
                </>
            ) : (
                <>
                    {imageSource !== '' ? (
                        <Image
                            style={styles.image}
                            source={{
                                uri: `file://'${imageSource}`,
                            }}
                        />
                    ) : null}

                    <View style={styles.backButton}>
                        <TouchableOpacity style={{backgroundColor:"#000",padding:10,justifyContent:"center",alignItems:"center",borderRadius:10,borderWidth:2,borderColor:"#fff",width:100,}} onPress={()=> setShowCamera(true)}>
                            <Text style={{color:"#fff", fontWeight:"500"}}>Back</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                        <TouchableOpacity style={{backgroundColor:"#000",padding:10,justifyContent:"center",alignItems:"center",borderRadius:10,borderWidth:2,borderColor:"#fff",width:100,}} onPress={()=> setShowCamera(true)}>
                            <Text style={{color:"#fff", fontWeight:"500"}}>Retak</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"#000",padding:10,justifyContent:"center",alignItems:"center",borderRadius:10,borderWidth:2,borderColor:"#fff",width:100,}} onPress={()=> setShowCamera(true)}>
                            <Text style={{color:"#fff", fontWeight:"500"}}>Use Photo</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </>
            )}

        </View>
    );
};

export default CameraScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItem: "center",
    },

})
