import React, { useState } from 'react';
import Heder from './component/Heder';
import Main from './component/Main';
import Footer from './component/Footer';
import './App.css'; 

function App() {


  return (
    <div className="app-container">
      <Heder />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
