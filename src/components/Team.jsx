import React from 'react';
import styled from 'styled-components';
const TeamParent = styled.div`
width:1024px;
margin: 0 auto;
`;
const CardStyle = styled.div`
    border:2px black solid;
    background: white;
    width: 100%;
    margin: 25px;
    box-shadow: 10px 8px  rgba(0, 0, 0, 0.192);
        h2{
            color: black;
            text-shadow: 1px 1px 5px #fff;
            border-bottom:2px black solid;
            padding-bottom: 5px;
            font-size:2.2rem;
            font-family: 'Cormorant Garamond', medium italic;
        }
        p{
            font-size: 1.45rem;
            font-style: bold;
            color: black;
        }
`;

const Team = (props) =>{
    return(
        <TeamParent className="team-container">
            <h2>List of Current Team Members</h2>
            {props.data.map(member => {
                return(
                    <CardStyle className="memberList" key={member.id}>
                        <h2>Name: {member.name}</h2>
                        <p>Email: {member.email}</p>
                        <p>Role: {member.role}</p>
                    </CardStyle>
                )
            })}
        </TeamParent>
    )
}

export default Team;