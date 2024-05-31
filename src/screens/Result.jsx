import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useRoute } from '@react-navigation/native'; // Importando useRoute

// Importa as variavel de ambiente que foram configuradas no path do babelConfig.config.js como módulo
import { API_KEY } from '@env';


export default function ResultsPage (props) {
  const route = useRoute(); // Acessando o objeto route
  const { genero } = route.params; // Extraindo o gênero dos parâmetros
  const { tema } = route.params;
  const { tresFilmes } = route.params;
  const [response, setResponse] = useState('');
  
  useEffect(() => {
    const run = async () => {
      // Carrega a variavel de ambiente que é a API KEY
      const API_KEY = process.env.API_KEY; 
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const prompt = `Me indique um filme do genêro ${genero}, que contenha esse ${tema} em sua sinopse. Três filmes que gostei desse genero foram: ${tresFilmes}Me indique somente filmes que existam no seu banco de dados. Me indique três filmes. Dê a sinopse de cada um deles`;

      const result = await model.generateContent(prompt);
      const responseText = await result.response.text();
      setResponse(responseText);
    };

    run();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>

      <Text style={styles.title} >{response}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  wrapper: {
    width: "100%",
    height: 700,
    backgroundColor: '#FFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});