import { useState, useEffect } from 'react'

import RoutineSet from "./RoutineSet"
import RoutineEdit from './RoutineEdit'

function Routine({ routine, onRoutineDelete, onRoutineDeleteState }){
    const [edit, setEdit] = useState(false)
    const [routineData, setRoutineData] = useState({
                                                    day: routine.day,
                                                    exercise: routine.exercise,
                                                    exerciseType: routine.exercise_type,
                                                    sets: handleNullInputs(routine.sets),
                                                    reps: handleNullInputs(routine.reps),
                                                    distance: handleNullInputs(routine.distance_miles),
                                                    time: handleNullInputs(routine.length_of_time_minutes)
                                                    })

    function handleNullInputs(data){
        return data === null ? 0 : data
     }

    function handleRoutineChange(e){
        console.log(e.target.name)
        console.log(e.target.value)
        setRoutineData({...routineData, [e.target.name]:e.target.value})
    }

    function handleRoutineEditSubmit(e){
        e.preventDefault()
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
        .then(data => {
            onRoutineDelete(data.id, data.client_id)
            onRoutineDeleteState(data.id)
        })
    }

    return(
        <li>
            <form onSubmit={handleRoutineEditSubmit}>
                {edit ? <RoutineEdit routineData={routineData} onRoutineChange={handleRoutineChange} /> : <RoutineSet routine={routine} />}
                <button onClick={handleRoutineDelete}>Delete</button>
                {/* <button onClick={handleRoutineEdit}>{edit ? "Save" : "Edit"}</button> */}
                <button type="submit">{edit ? "Save" : "Edit"}</button>
            </form>
        </li>
    )
}

export default Routine