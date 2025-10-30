import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const lightColors = {
  primary: '#a83d49',
  secondary: '#9a9c97',
  tertiary: '#ccc7c9',
  text: '#4c4951',
  background: '#f9f9f9',
  cardBackground: '#fff',
  border: '#ccc7c9',
  inputBackground: '#f9f9f9',
};

export const darkColors = {
  primary: '#3F131E',
  secondary: '#968077',
  tertiary: '#30700D',
  text: '#FIEDDO',
  background: '#141415',
  cardBackground: '#2D2931',
  border: '#3F131E',
  inputBackground: '#2D2931',
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const colors = isDark ? darkColors : lightColors;

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
