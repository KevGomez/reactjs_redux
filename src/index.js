import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from "./Features/User";
import bookReducer from "./Features/Books";
import themeReducer from "./Features/Theme"

// Store - You need to store all the states into this Store Container
const store = configureStore({
      reducer: {
        user: userReducer,
        book: bookReducer,
        theme: themeReducer
      }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* Providing access to all the state */}
    <Provider store={store}>
       <App />
    </Provider>

  </React.StrictMode>
);

