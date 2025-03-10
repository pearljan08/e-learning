import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/auth/Login'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [count, setCount] = useState(0);


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ProtectedRoute />} />
        <Route path="/auth">
          <Route index element={<Login />} />
        </Route>
        <Route path="/admin" element={<ProtectedRoute />} >

        </Route>
        <Route path="/professor" element={<ProtectedRoute />} >

        </Route>
        <Route path="/student" element={<ProtectedRoute />} >

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
