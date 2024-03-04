import React from 'react';
import ReactDOM from 'react-dom/client';

// Contexts
import ThemeProvider from '@/contexts/ThemeContext';

// App
import App from '@/App.tsx';

// Styles
import '@/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
