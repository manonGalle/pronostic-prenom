import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from '../Form/Form';
import Thanks from '../Form/Thanks';
import './App.css';

function App() {

  const [firstname, setFirstname] = useState ('')

  return (
    <div className="App">
      <Form setFirstname={setFirstname} firstname={firstname}/>
      <Routes>
        <Route path="/thanks" element={<Thanks firstname={firstname}/>}/>
      </Routes>
    </div>
  );
}

export default App;
