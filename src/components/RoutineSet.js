import React from 'react'

function RoutineSet({ routine, onSetEdit }){
    return(
        <div className="routines-set">
            <p className="routines-set">Day of Week: {routine.day}</p>
            <p className="routines-set">Exercise: {routine.exercise}</p>
            <p className="routines-set">Exercise Type: {routine.exercise_type}</p>
            <p className="routines-set">Sets: {routine.sets}</p>
            <p className="routines-set">Reps: {routine.reps}</p>
            <p className="routines-set">Distance (Miles): {routine.distance_miles}</p>
            <p className="routines-set">Length of Time (Minutes): {routine.length_of_time_minutes}</p>
            <button className="routines-set" onClick={onSetEdit}>Edit</button>
        </div>
    )
}

export default RoutineSet