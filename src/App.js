import React, {useState} from 'react';
import './App.css';
//Importing Components
import TeamForms from "./components/TeamForms";
import Team from "./components/Team";

//Import Data
import data from './data'

function App() {

  

  return (
    <div className="App">
     <TeamForms />
     <Team />
    </div>
  );
}

export default App;
