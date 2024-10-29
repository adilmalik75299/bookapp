import { createRoot } from 'react-dom/client'
import App from './App'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <AuthProvider>
   <App /> 
   </AuthProvider>
    </BrowserRouter>
)