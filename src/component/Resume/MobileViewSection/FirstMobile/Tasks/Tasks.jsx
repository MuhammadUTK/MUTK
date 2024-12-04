import "./Tasks.css"
import Person1 from "../../../Images/Task-Persons/Person1.png"
import Person2 from "../../../Images/Task-Persons/Person2.png"
import Person3 from "../../../Images/Task-Persons/Person3.png"
import Person4 from "../../../Images/Task-Persons/Person4.png"
import Person5 from "../../../Images/Task-Persons/Person5.png"
import Person6 from "../../../Images/Task-Persons/Person6.png"

import React from 'react'

function Tasks({title, price, date, time, weeks, progressPercentage}) {

    const members = [Person1, Person2, Person3, Person4, Person5, Person6];
    const teamSize = members.length;
    const totalMembers = Math.floor(Math.random() * teamSize) + 1;
    const taskMembers = []

    for (let i = 0; i < totalMembers; i++) {
        const randomIndex = Math.floor(Math.random() * members.length);
        taskMembers.push(members[randomIndex]);
        members.splice(randomIndex, 1);
    }
    console.log(taskMembers);


    return (
        <div className="task-container">
            <div className="task-information">
                <div className="task-title">
                    <div className="task-heading">
                        {title}
                    </div>
                    <div className="task-title-divider">
                    </div>
                    <div className="task-price">
                        <p>${price}</p>
                    </div>
                </div>
                <div className="task-duration">
                    <div className="task-date">
                        <p>{date}</p>
                    </div>
                    <div className="task-duration-divider">
                    </div>
                    <div className="task-time">
                        <p>{time}</p>
                    </div>
                    </div>
                    <div className="task-progress">
                        <div className="total-percentage">
                            <div className="progress-percentage" style={{width: `${progressPercentage}%`}}></div>
                        </div>
                        <div className="task-weeks">
                        <p>{weeks} weeks</p>
                        </div>
                    </div>
                </div>
                <div className="task-members">
                <p>Members</p>
                <div className="member">
                    {taskMembers.map((member, index) => (
                        <img src={member} alt="member" key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tasks