import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import router from './Router/Router.jsx'
import { RouterProvider } from 'react-router'

// For React Animation AOS 
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AuthProvider from './Context/AuthProvider.jsx'
// ..
AOS.init()

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
   <RouterProvider router={router} />
</AuthProvider>
  </StrictMode>,
)
