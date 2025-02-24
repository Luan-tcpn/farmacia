import React from 'react';
import './styles/global.css';
import ReactDOM from 'react-dom/client';
import App from './App'; // Vamos criar o App.jsx no próximo passo

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);