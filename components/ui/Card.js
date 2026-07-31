import React from 'react';
import {View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
    return <View style={styles.card}>{children}</View>
}

export default Card;



const styles = StyleSheet.create({
    card: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4, // for Android shadow
        shadowColor: 'black', // for iOS shadow
        shadowOffset: { width: 0, height: 2 }, // for iOS shadow
        shadowRadius: 6, // for iOS shadow
        shadowOpacity: 0.25, // for iOS shadow
    },
})