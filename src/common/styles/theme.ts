import {DefaultTheme} from 'react-native-paper';
import colors from './colors';
import typography from './typography';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    darkBlue: colors.darkBlue,
    primary: colors.primary,
    accent: colors.secondary,
    background: colors.background,
    teal: colors.teal,
    white: colors.surface,
    red: colors.error,
    text: colors.text,
    gray: colors.disabled,
    placeholder: colors.placeholder,
    black: colors.backdrop,
    notification: colors.notification,
  },
  typography: {
    ...typography,
  },
};

export default theme;
