module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        //  Módulo para carregar as variáveis de ambiente
        'module:react-native-dotenv', {
          // Nome do módulo onde as variáveis de ambiente serão acessadas.
          moduleName: '@env', 
          // Caminho para o arquivo .env.
          path: '.env',
          // Lista de variáveis a serem ignoradas (se necessário).
          blacklist: null,
          // Lista de variáveis a serem incluídas (se necessário).
          whitelist: null,
          // Define se as variáveis devem ser tratadas como seguras.
          safe: false,
          // Permite que as variáveis não definidas sejam acessadas.
          allowUndefined: true 
        }
      ]
    ]
  };
};
