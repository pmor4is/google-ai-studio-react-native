import React, { createContext, useState } from 'react';

export const QuestionsContext = createContext();

const initialState = {
  genero: '',
  tema: '',
  tresFilmes: '',
};

export const QuestionsProvider = ({ children }) => {
  const [data, setData] = useState(initialState);

  return (
    <QuestionsContext.Provider value={{ data, setData }}>
      {children}
    </QuestionsContext.Provider>
  );
};