import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Homepage(props) {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Vamos indicar um filme para você!</Text>
                <Button
                    style={styles.btn}
                    title='Começar!'
                    onPress={() => props.navigation.navigate("QuestionsPage")}
                    color={'green'}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E4E4E4',
        padding: 20
    },
    wrapper: {
        width: "100%",
        height: 700,
        backgroundColor: '#FFF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    btn: {
        width: 100,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ABD1C6',
        marginTop: 20,
    }
})