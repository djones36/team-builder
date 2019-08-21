import React, {useState} from 'react';
import './App.css';
//Importing Components
import TeamForms from "./components/TeamForms";
import Team from "./components/Team";

//Import Data
import data from './data'

function App() {

  const [teamMembers, SetTeamMembers] = useState(data)
  const addNewTeamMember = NewMember => {
    SetTeamMembers([...teamMembers, NewMember])
  }

  return (
    <div className="App">
     <TeamForms addNewTeamMember={addNewTeamMember}/>
     <Team data={teamMembers}/>
    </div>
  );
}

export default App;
