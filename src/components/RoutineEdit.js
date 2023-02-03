import React from 'react'
import { useState } from 'react'
import RoutineEditForm from './RoutineEditForm'

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
        const numberFields = ['sets', 'reps', 'distance_miles', 'length_of_time_minutes']

        if(numberFields.includes(e.target.name) && !isNaN(Number(e.target.value)) && !e.target.value.includes('.') ) {
            setRoutineData({...routineData, [e.target.name]:e.target.value})
        } else if (!numberFields.includes(e.target.name)) {
            setRoutineData({...routineData, [e.target.name]:e.target.value})
        }
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
        .then(data => onRoutineDelete(data.id, clientId))
    }
    
    return(
        <React.Fragment>
            <RoutineEditForm routineData={routineData} onRoutineEditSubmit={handleRoutineEditSubmit} onRoutineChange={handleRoutineChange} />
            <button onClick={onSetEdit}>Cancel</button>
            <button onClick={handleRoutineDelete}>Delete</button>
        </React.Fragment>
    )
}

export default RoutineEdit