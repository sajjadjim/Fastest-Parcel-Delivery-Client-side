import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import router from './Router/Router.jsx'
import { RouterProvider } from 'react-router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// For React Animation AOS 
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AuthProvider from './Context/AuthProvider.jsx'
// ..
AOS.init()

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
<QueryClientProvider client={queryClient}>
  <AuthProvider>
   <RouterProvider router={router} />
</AuthProvider>
</QueryClientProvider>

  </StrictMode>,
)
