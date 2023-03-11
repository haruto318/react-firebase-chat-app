import React from 'react';
import './App.css';
import SignIn from './components/ SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<SignIn />} />
          <Route path={`/register/`} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
