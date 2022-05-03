import React from 'react'
import './App.css'
import { AuthProvider } from './auth'
import Comments from './Comments'
import CreateUser from './CreateUser';
import NewComents from './NewComments';
import SingInUser from './SingInUser';
import UserInfo from './UserInfo';

function App() {
  return (
    <AuthProvider>
    <div className="App">
     <NewComents/>
     <CreateUser/>
     <Comments/>
     <SingInUser/>  
     <UserInfo/>
    </div>
    </AuthProvider>
  );
}

export default App;
