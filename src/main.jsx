import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/App.jsx";
import './css/style.css'

ReactDOM.createRoot(document.getElementById('main')).render(
  <React.StrictMode>
    <App/>
    {/*<StorePicker/>*/}
  </React.StrictMode>,
)
