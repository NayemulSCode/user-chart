import React from 'react';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Users = (props) => {
    const name = props.user.name;
    const {title, first, last} = name;
    const fulName = `${title} ${first} ${last}`;
    const image = props.user.picture.large;
    const location = props.user.location;
    const {city, country} = location;
    const {email, phone} = props.user;
    const salary = Math.round(Math.random()*100000);
    const gender = props.user.gender;
    const age = props.user.dob.age;
    const dataSet ={
        name: fulName,
        salary: salary
    }
    return (
        <div className="card">
            <div className="cover-image">
                <button onClick={() => props.addHandler(dataSet)} id="add-button"> <FontAwesomeIcon icon={faUser} className="add-icon" /> add user</button>
            </div>
            <div className="cardImg">
                <img src={image} alt=""/>
            </div>
            <div className="cardBody">
                <div className="info">
                    <h1 className="name">{fulName} <span className="age">age:{age}</span></h1>
                </div>
                <div className="contact">
                    <h5>{country},{city}</h5>
                    <h6>{email}</h6>
                    <p>{phone}</p>
                </div>
            </div>
            <div className="insights">
                <div className="insights-item">
                    <h6>{salary}<span id="month">/Monthly</span></h6>
                    <p>Salary</p>
                </div>
                <div className="insights-item">
                    <h6>{gender}</h6>
                    <p>Gender</p>
                </div>
            </div>
            
        </div>
    );
};

export default Users;