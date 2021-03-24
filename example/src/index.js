import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme, Box } from 'krado-react';
// import './styles/index.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Box variant="root">
      <App />
    </Box>
  </ThemeProvider>,
  document.getElementById('root')
);
