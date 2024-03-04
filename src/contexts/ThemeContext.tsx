import React, {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from 'react';

type Theme = 'light' | 'dark';
type ThemeContextType = {
  theme: Theme;
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const savedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState<Theme>((savedTheme as Theme) || 'dark');

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const isDarkTheme = theme === 'dark';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
