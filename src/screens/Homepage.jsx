import { View, Text, Button, StyleSheet, Image } from 'react-native'

import styles from './styles/HomepageStyle'
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