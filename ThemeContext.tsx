import { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkTheme: true,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Load theme preference from localStorage
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        setIsDarkTheme(false);
        document.documentElement.classList.add('light-theme');
      } else {
        // Ensure dark theme is applied by default
        setIsDarkTheme(true);
        document.documentElement.classList.remove('light-theme');
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => {
      const newTheme = !prev;
      
      try {
        if (newTheme) {
          // Dark theme
          document.documentElement.classList.remove('light-theme');
          localStorage.setItem('theme', 'dark');
          console.log("Switched to dark theme");
        } else {
          // Light theme
          document.documentElement.classList.add('light-theme');
          localStorage.setItem('theme', 'light');
          console.log("Switched to light theme");
        }
      } catch (error) {
        console.error("Error accessing localStorage:", error);
      }
      
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};