import React from 'react';
import {StyleSheet, Text, Dimensions} from "react-native";

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    title: {
        fontSize: deviceWidth < 380 ? 18 : 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        fontFamily: 'open-sans-bold',
        maxWidth:  '80%',
        width: 300
    }
})