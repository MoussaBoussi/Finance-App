import { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';

const useTheme = () => {
  const Theme = useContext(ThemeContext);

  return { ...Theme, ThemeProvider };
};

export default useTheme;
