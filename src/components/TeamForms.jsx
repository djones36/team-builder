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
        SetNewMember({ ...newMember, [event.target.name]: event.target.value});
    }
    const submitForm = event => {
        //revent the default reload of a button click in a form
        event.preventDefault();
        //Create a new Obj, include all properties from newMember State and add an id to it.
        const newTeamMember = {
          ...NewMember,
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
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="First Name"
                    //value
                    //onChange={}
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    name="email"
                    placeholder="email@email.com"
                    //value
                    //onChange={}
                />
                <label htmlFor="role">Role</label>
                <select>
                    <option value="">Frontend Designer</option>
                    <option value="">Backend Designer</option>
                    <option value="">Designer</option>
                </select>
            </form>
        </div>
    )
}

export default TeamForms;