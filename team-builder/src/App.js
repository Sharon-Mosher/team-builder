import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Members from './Members'

function App() {
  const [members, setMembers] = useState([]);
  return(
    <div className="App">
      <Form members={members} setMembers={setMembers}/>
      <Members members={members}/>
    </div>
  );
}

export default App;
