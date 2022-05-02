import React from 'react'
import './App.css'
import { AuthProvider } from './auth'
import Comments from './Comments'

function App() {
  return (
    <AuthProvider>
    <div className="App">
     <Comments/>  
    
    </div>
    </AuthProvider>
  );
}

export default App;
