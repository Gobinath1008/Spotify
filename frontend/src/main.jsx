import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SongContextProvider } from './context/SongContext.jsx'
import PlayerContextProvider from './context/PlayerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SongContextProvider>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </SongContextProvider>
  </React.StrictMode>,
)
