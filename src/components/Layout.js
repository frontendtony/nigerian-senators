import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#64ffda'
    },
    secondary: {
      main: '#7c4dff'
    }
  }
});

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
