import React from 'react'
import './App.scss'


import AppRoutes from "./App-routes"
import { withToastProvider } from './components/Toast';

function App() {

  return (
    <div className="App">
      <AppRoutes/>
    </div>
  );
}

export default withToastProvider(App)
