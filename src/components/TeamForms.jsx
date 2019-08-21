import React from "react";
import uuid from 'uuid/v1';

const TeamForms = (props) =>{
    const [newMember, SetNewMember]= ({
        name: "",
        email: "",
        role: "",
    })
    
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