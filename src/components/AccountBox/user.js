import React from 'react'

function User({details }) {
    if(!details) {
        return <h3>Loading...</h3>
    }

    return (
        <div>
            <h2>{details.username}</h2>
            <h2>department: {details.dept}</h2>
        </div>
    )
    }

    export default User