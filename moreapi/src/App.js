import React from 'react'
import './App.css'
import { AuthProvider } from './auth'
import Comments from './Comments'
import CreateUser from './CreateUser';
import NewComents from './NewComments';

function App() {
  return (
    <AuthProvider>
    <div className="App">
     <NewComents/>
     <CreateUser/>
     <Comments/>  
  
    </div>
    </AuthProvider>
  );
}

export default App;
