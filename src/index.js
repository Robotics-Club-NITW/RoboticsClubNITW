import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CustomProvider } from 'rsuite';
import { AppProvider } from './context/AppContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CustomProvider theme='light'>
    <BrowserRouter>
    <AppProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppProvider>
    </BrowserRouter>
  </CustomProvider>
);

reportWebVitals();
