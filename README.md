<div align='center'>
<h1> Google AI Studio com React Native </h1>
Um projeto para indicação de filmes utilizando Google Studio IA

</div>

## Criando um projeto um projeto igual:
Para criar um projeto com Expo, para visualização no próprio dispositivo móvel, seguir as linhas abaixo:
~~~bash
npx create-expo-app --template
cd <diretorio_do_projeto>
npx expo start --clear
~~~

## Bibliotecas instaladas:
~~~ bash
# Instalação de bibliotecas de navegação
npm install @react-navigation/native @react-navigation/native-stack 
npx expo install react-native-screens react-native-safe-area-context
# Instalação do Google Generative AI
npm install @google/generative-ai
# Instalação do dotenv
npm install react-native-dotenv
~~~

### Configuração da API Google AI Generative
~~~ javascript
const [response, setResponse] = useState('');

useEffect(() => {
    const run = async () => {
      try {
        const API_KEY = process.env.API_KEY; 
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const prompt = `inserir-prompr-que-deseja-utilizar`;

        const result = await model.generateContent(prompt);
        const responseText = await result.response.text();
        setResponse(formattedResponse);
      } catch (error) {
        console.error('Erro ao gerar resposta:', error); 
      }
    };

    run();
  }, []);

~~~

### Configuração das variaveis de ambiente:
Primeiro, criar o arquivo .env
~~~ .env
API_KEY = "ID_DA_API"
~~~

Adicionar no arquivo babel.config.js, as linhas abaixo, logo após presets
~~~ javascript
plugins: [
      [
        'module:react-native-dotenv', {
          moduleName: '@env', 
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true 
        }
      ]
    ]
~~~

Para utilizar a API_KEY
~~~ javascript
import { API_KEY } from '@env';
const API_KEY = process.env.API_KEY;
~~~
