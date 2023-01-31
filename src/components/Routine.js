import { useState } from 'react'

import RoutineSet from "./RoutineSet"
import RoutineEdit from './RoutineEdit'

function Routine({ routine, onRoutineDelete, onRoutineDeleteState, onRoutineUpdate, onRoutineUpdateState }){
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
        return data === null ? 0.0 : data
    }                                                

    function handleRoutineChange(e){
        console.log(e.target.name)
        setRoutineData({...routineData, [e.target.name]:e.target.value})
    }

    function handleRoutineEditSubmit(e){
        e.preventDefault()

        if (edit) {
            const edittedValues = {}

            for (const key in routineData){
                if(routine[key] !== routineData[key]) edittedValues[key] = routineData[key]
            }

            if (Object.keys(edittedValues).length !== 0) {
                fetch(`http://localhost:9292/routines/${routine.id}`,{
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(edittedValues)
                })
                .then(res => res.json())
                .then((data) => {
                    onRoutineUpdate(data, routine.client_id)
                    onRoutineUpdateState(data)
                })
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