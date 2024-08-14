import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './Context/CreateContext.jsx';
import MyRouter from './Router/MyRouter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <Router>
    <ContextProvider>
      <MyRouter/>
    </ContextProvider>
    </Router>
  </React.StrictMode>,
  
)
