import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Greeting from './App/Components/Greeting.jsx'
import PandaOrder from './App/Pages/PandaOrder.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PandaOrder />
  </React.StrictMode>,
)
