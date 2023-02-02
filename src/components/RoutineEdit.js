import React from 'react'
import { useState } from 'react'

function RoutineEdit({ routine, clientId, onSetEdit, onRoutineDelete, onRoutineUpdate }) {
    const [routineData, setRoutineData] = useState({
                                                    day: routine.day,
                                                    exercise: routine.exercise,
                                                    exercise_type: routine.exercise_type,
                                                    sets: handleNulls(routine.sets),
                                                    reps: handleNulls(routine.reps),
                                                    distance_miles: handleNulls(routine.distance_miles),
                                                    length_of_time_minutes: handleNulls(routine.length_of_time_minutes)
                                                    })

    function handleNulls(data){
        return data === null ? '' : data
    }                                                

    function handleRoutineChange(e){
        setRoutineData({...routineData, [e.target.name]:e.target.value})
    }

    function handleRoutineEditSubmit(e){
        e.preventDefault()
        const editedValues = {}

        for (const key in routineData){
            const nullifiedData = routineData[key] === '' ? null : routineData[key]
            if(routine[key] !== nullifiedData) editedValues[key] = nullifiedData
        }

        if (Object.keys(editedValues).length !== 0) {
            fetch(`http://localhost:9292/clients/${clientId}/routines/${routine.id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editedValues)
            })
            .then(res => res.json())
            .then(() =>  onRoutineUpdate(editedValues, routine.id))
        }

        onSetEdit()
    }

    function handleRoutineDelete(){
        fetch(`http://localhost:9292/clients/${clientId}/routines/${routine.id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(routine)
        })
        .then(res => res.json())
        .then(data => onRoutineDelete(data.id))
    }
    
    return(
        <React.Fragment>
            <form onSubmit={handleRoutineEditSubmit}>
                <label>Day of Week: 
                    <input type="text" name="day" value={routineData.day} onChange={handleRoutineChange} required/>
                </label>
                <label>Exercise: 
                    <input type="text" name="exercise" value={routineData.exercise} onChange={handleRoutineChange} required/>
                </label>
                <label>Exercise Type: 
                    <input type="text" name="exercise_type" value={routineData.exercise_type} onChange={handleRoutineChange} required/>
                </label>
                <label>Sets: 
                    <input type="text" name="sets" value={routineData.sets} onChange={handleRoutineChange}/>
                </label>
                <label>Reps: 
                    <input type="text" name="reps" value={routineData.reps} onChange={handleRoutineChange}/>
                </label>
                <label>Distance (Miles): 
                    <input type="text" name="distance_miles" value={routineData.distance_miles} onChange={handleRoutineChange}/>
                </label>
                <label>Length of Time (Minutes): 
                    <input type="text" name="length_of_time_minutes" value={routineData.length_of_time_minutes} onChange={handleRoutineChange}/>
                </label>
                <button type="submit">Save</button>
            </form>
            <button onClick={onSetEdit}>Cancel</button>
            <button onClick={handleRoutineDelete}>Delete</button>
        </React.Fragment>
    )
}

export default RoutineEdit