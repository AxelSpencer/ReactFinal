import { createContext, useState } from 'react'
import { useEffect } from 'react';

export const themes = {
  light: {
    foreground: '#242526',
    background: '#fff',
    box: 'rgb(228 228 228)',
    btn: '#1c8eff',
    btncolor: '#fff',
    name: 'Light',
    btnp: '#28a745',
    btnn: '#dc3545',
    btnc: '#fff'
  },
  dark: {
    foreground: '#fff',
    background: '#242526',
    box: '#353738',
    btn: '#1a1a1a',
    btncolor: '#fff',
    name: 'Dark',
    btnp: '#28a745',
    btnn: '#dc3545',
    btnc: '#fff'
  },
  neit: {
    foreground: '#fff',
    background: '#204984',
    box: '#4a87d4',
    btn: '#ffc107',
    btncolor: '#000',
    name: 'NEIT',
    btnp: '#28a745',
    btnn: '#dc3545',
    btnc: '#fff'
  },
};

export const ThemeContext = createContext({
  theme: {},
  toggleTheme: () => {},
});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
      setTheme((previousValue) => {
        if (previousValue === themes.light) {
          return themes.dark;
        } else if (previousValue === themes.dark) {
          return themes.neit;
        } else {
          return themes.light;
        }
      });
    };

    useEffect(() => {
        document.body.style.background = theme.background;
        document.body.style.color = theme.foreground;
    }, [theme]);

    return(
    <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
        {props.children}
    </ThemeContext.Provider>
    );
}