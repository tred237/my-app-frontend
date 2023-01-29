import { useState } from 'react'

import RoutineSet from "./RoutineSet"
import RoutineEdit from './RoutineEdit'

function Routine({ routine, onRoutineDelete, onRoutineDeleteState }){
    const [edit, setEdit] = useState(false)

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
            {edit ? <RoutineEdit /> : <RoutineSet routine={routine} />}
            <button onClick={handleRoutineDelete}>Delete</button>
            <button onClick={() => setEdit(!edit)}>{edit ? "Save" : "Edit"}</button>
        </li>
    )
}

export default Routine