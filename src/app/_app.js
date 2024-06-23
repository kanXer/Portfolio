// pages/_app.js
import React from 'react';
import Navbar from '../../components/navbar';
import { ThemeProvider } from '../components/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
      <Navbar />
  );  
}

export default MyApp;
