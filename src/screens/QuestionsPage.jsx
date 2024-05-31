import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { QuestionsContext } from '../context/answersContext'

import styles from './styles/QuestionsPage';

export default function Questions1(props) {
  const { data, setData } = useContext(QuestionsContext)

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Primeiro indique que gênero de filme você gostaria de assistir?</Text>
      <TextInput
        placeholder='Indique o gênero de filme que você deseja assistir: '
        keyboardType='default'
        value={data.genero} // Acessa o valor do gênero no objeto data
        onChangeText={(text) => {
          if (data && data.genero !== undefined) {
            setData({ ...data, genero: text });
          }
        }}
        style={styles.input}
      />
      <Text style={styles.title}>Agora diga três filmes que gostou desse genero: </Text>
      <TextInput
        placeholder='Tres filmes: '
        keyboardType='default'
        value={data.tresFilmes} // Acessa o valor do gênero no objeto data
        onChangeText={(text) => {
          if (data && data.tresFilmes !== undefined) {
            setData({ ...data, tresFilmes: text });
          }
        }}
        style={styles.input}
      />
      <Text style={styles.title}>Agora fala pra gente, qual tema você gostaria que o filme tenha?</Text>
      <TextInput
        placeholder='Tema: '
        keyboardType='default'
        value={data.tema} // Acessa o valor do gênero no objeto data
        onChangeText={(text) => {
          if (data && data.tema !== undefined) {
            setData({ ...data, tema: text });
          }
        }}
        style={styles.input}
      />
      <Button
        title='Resultado'
        onPress={() => props.navigation.navigate("Result", { genero: data.genero, tema: data.tema })}
        color={'green'}
        style={styles.button}
      />
    </View>
  )
}
