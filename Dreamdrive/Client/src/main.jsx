import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Auth0Provider
    domain="dev-kl04oxkf5htkpeft.us.auth0.com"
    clientId="EdW0cZ7HQzZGJdJ6mL17TnxmkX8N2bh0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    
  
)
