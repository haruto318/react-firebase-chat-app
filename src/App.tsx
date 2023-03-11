import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/ SignIn';
import Register from './components/Register';
import Chat from './components/Chat';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<SignIn />} />
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/chat/`} element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
