import React from 'react';
import './AddUserInfo.css'
import './Users'
const AddUserInfo = (props) => {
    console.log(props.addfriends);
    const addUserData = props.addfriends;
    const totalSalary = addUserData.reduce(function(previousValue, currentValue){
        return previousValue + currentValue.salary;
    },0)
    return (
        <div>
            <div className="cardHeadr">
                <h1>Member Account Board</h1>
                <div>
                    <h2>Added Member: {addUserData.length} </h2>
                    <p>Total Monthly Salary: {totalSalary} </p>
            </div>
            </div>
            
        </div>
    );
};

export default AddUserInfo;