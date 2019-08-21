import React, {useState} from "react";
import uuid from 'uuid/v1';


const TeamForms = (props) =>{
    const [newMember, SetNewMember]= useState({
        name: "",
        email: "",
        role: "",
    });
    const changeHandler = event =>{
        console.log(event.target.value);
        SetNewMember({ ...newMember, 
            [event.target.name]: event.target.value});
    }
    const submitForm = event => {
        //revent the default reload of a button click in a form
        event.preventDefault();
        //Create a new Obj, include all properties from newMember State and add an id to it.
        const newTeamMember = {
          ...newMember,
          id: uuid()
        };
        //Add the new team memember to state in app component
        props.addNewTeamMember(newTeamMember);

        //React state in TeamForm component
        SetNewMember({ name: "", email: "", role: "" });
      };


    return(
        <div>
            <h1>Team Forms</h1>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    placeholder="First Name"
                    value={newMember.name}
                    onChange={changeHandler}
                />

                <label htmlFor="email">Email: </label>
                <input 
                    type="email"
                    name="email"
                    placeholder="email@email.com"
                    value={newMember.email}
                    onChange={changeHandler}
                />
                <label htmlFor="role">Role: </label>
                <input 
                    type="text"
                    name="role"
                    placeholder="Frontend Designer"
                    value={newMember.role}
                    onChange={changeHandler}
                />
                <button type="submit">Enroll</button>
            </form>
        </div>
    )
}

export default TeamForms;