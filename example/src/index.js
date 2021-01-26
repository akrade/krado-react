import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme, Box } from 'krado-react';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Box fontFamily="body">
      <App />
    </Box>
  </ThemeProvider>,
  document.getElementById('root')
);
