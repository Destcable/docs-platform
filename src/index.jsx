import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './app/assets/styles/index.css'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>,
)
