import React from 'react'
import './App.css'
import { AuthProvider } from './auth'
import Comments from './Comments'
import CreateUser from './CreateUser';

function App() {
  return (
    <AuthProvider>
    <div className="App">
     <CreateUser/>
     <Comments/>  
  
    </div>
    </AuthProvider>
  );
}

export default App;
