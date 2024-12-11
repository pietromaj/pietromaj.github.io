import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Ativa o modo escuro
    primary: {
      main: '#90caf9', // Azul claro
    },
    secondary: {
      main: '#f48fb1', // Rosa claro
    },
    background: {
      default: '#121212', // Fundo principal (escuro)
      paper: '#1e1e1e', // Fundo de cards (menos escuro)
    },
    text: {
      primary: '#ffffff', // Texto principal (branco)
      secondary: '#aaaaaa', // Texto secundário (acinzentado)
    },
  },
});

export default theme;