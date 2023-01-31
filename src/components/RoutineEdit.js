import React from 'react'

function RoutineEdit({ routineData, onRoutineChange }) {
    
    return(
        <React.Fragment>
            <label>Day: 
                <input type="text" name="day" value={String(routineData.day)} onChange={onRoutineChange} required/>
            </label>
            <label>Exercise: 
                <input type="text" name="exercise" value={routineData.exercise} onChange={onRoutineChange} required/>
            </label>
            <label>Exercise Type: 
                <input type="text" name="exerciseType" value={routineData.exerciseType} onChange={onRoutineChange} required/>
            </label>
            <label>Sets: 
                <input type="text" name="sets" value={routineData.sets} onChange={onRoutineChange}/>
            </label>
            <label>Reps: 
                <input type="text" name="reps" value={routineData.reps} onChange={onRoutineChange}/>
            </label>
            <label>Distance (Miles): 
                <input type="text" name="distance" value={routineData.distance} onChange={onRoutineChange}/>
            </label>
            <label>Length of Time (Minutes): 
            <input type="text" name="time" value={routineData.time} onChange={onRoutineChange}/>
            </label>
        </React.Fragment>
    )
}

export default RoutineEdit