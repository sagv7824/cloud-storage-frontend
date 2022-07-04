import logo from './logo.svg';
import './App.css';

import Login from './pages/login/login';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/register/register';
import FileManager from './pages/fileManager/fileManager';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/explorer" element={<FileManager/>}/>
    </Routes>
  );
}

export default App;
