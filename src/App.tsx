import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/auth/Login'
import ProtectedRoute from './components/ProtectedRoute';
import SetPassword from './pages/auth/SetPassword';

function App() {
  const [count, setCount] = useState(0);


  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path="/auth">
          <Route index element={<Login />} />
          <Route path="password" element={<SetPassword />} />
        </Route>
        <Route path="/admin" >

        </Route>
        <Route path="/professor">

        </Route>
        <Route path="/student" >

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
