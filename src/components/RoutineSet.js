import React from 'react'

function RoutineSet({ routine }){
    return(
        <React.Fragment>
            <p>Day: {routine.day}</p>
            <p>Exercise: {routine.exercise}</p>
            <p>Type: {routine.exercise_type}</p>
            <p>Sets: {routine.sets}</p>
            <p>Reps: {routine.reps}</p>
            <p>Distance (Miles): {routine.distance_in_miles}</p>
            <p>Length of Time (Minutes): {routine.length_of_time_minutes}</p>
        </React.Fragment>
    )
}

export default RoutineSet