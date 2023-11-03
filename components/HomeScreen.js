import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Image App</Text>
            <View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Camera')}><Text style={styles.text}>Capture Image</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Gallery')}><Text style={styles.text}>Captured Images</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn}><Text style={styles.text}>Clear All Data</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        margin:10,
        borderWidth:6,
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height:"98%",
        borderRadius:15,
    

    },
    btn: {
        borderRadius: 2,
        borderWidth: 2,
        width: 300,
        backgroundColor: "green",
        height: 50,
        marginBottom: 5,
        borderRadius:5
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        textAlign:"center",
        marginTop:10
    },
    title:{
        fontSize:45,
        fontWeight:"bold",
        marginBottom:80

    }
})