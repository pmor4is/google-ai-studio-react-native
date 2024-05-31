import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useRoute } from '@react-navigation/native'; 
import styles from './styles/ResultsPageStyles';
import { API_KEY } from '@env';

export default function ResultsPage (props) {
  const route = useRoute(); 
  const { genero } = route.params; 
  const { tema } = route.params;
  const { tresFilmes } = route.params;
  const [response, setResponse] = useState('');

  useEffect(() => {
    const run = async () => {
      try {
        const API_KEY = process.env.API_KEY; 
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const prompt = `Me indique um filme do genêro ${genero}, que contenha esse ${tema} em sua sinopse. Três filmes que gostei desse genero foram: ${tresFilmes}Me indique somente filmes que existam no seu banco de dados. Me indique três filmes. Dê a sinopse de cada um deles. Não precisa númerar os filmes no início 1, 2 ou 3`;

        const result = await model.generateContent(prompt);
        const responseText = await result.response.text();

        // Substituindo os estilos de markdown
        const formattedResponse = responseText
          .replace(/\*\*(.*?)\*\*/g, 'Título: $1') // **texto** para Título: texto
          .replace(/\*(.*?)\*/g, '$1'); // *texto* para Sinopse: texto

        setResponse(formattedResponse);
      } catch (error) {
        console.error('Erro ao gerar resposta:', error); 
      }
    };

    run();
  }, []);

  // Estilos para negrito e itálico
  const boldStyle = { fontWeight: 'bold' };
  const italicStyle = { fontStyle: 'italic' };

  // Função para identificar se a linha começa com "Título: "
  const isTitle = (line) => line.startsWith('Título: ');

  // Divide a resposta em linhas e aplica os estilos
  const formattedLines = response.split('\n').map((line, index) => {
    const style = isTitle(line) ? boldStyle : italicStyle;
    return <Text key={index} style={[styles.title, style]}>{line}</Text>;
  });

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {formattedLines} 
      </View>
    </View>
  );
};