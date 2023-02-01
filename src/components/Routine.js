import { useState } from 'react'

import RoutineSet from "./RoutineSet"
import RoutineEdit from './RoutineEdit'

function Routine({ routine, clientId, onRoutineDelete, onRoutineUpdate }){
    const [edit, setEdit] = useState(false)
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

        if (edit) {
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
        }

        setEdit(!edit)
    }

    function handleRoutineDelete(){
        fetch(`http://localhost:9292/routines/${routine.id}`,{
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
        <li>
            <form onSubmit={handleRoutineEditSubmit}>
                {edit ? <RoutineEdit routineData={routineData} onRoutineChange={handleRoutineChange} /> : <RoutineSet routine={routine} />}
                <button type="submit">{edit ? "Save" : "Edit"}</button>
                {edit ? <button onClick={() => setEdit(!edit)}>Cancel</button> : null}
                {edit ? <button onClick={handleRoutineDelete}>Delete</button> : null}
            </form>
        </li>
    )
}

export default Routine