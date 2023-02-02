import { useState } from 'react'

import RoutineSet from "./RoutineSet"
import RoutineEdit from './RoutineEdit'

function Routine({ routine, clientId, onRoutineDelete, onRoutineUpdate }){
    const [edit, setEdit] = useState(false)

    function handleSetEdit(e = false){
        if(e) e.preventDefault()
        setEdit(!edit)
    }

    return(
        <li>
            {edit ? <RoutineEdit routine={routine} clientId={clientId} onSetEdit={handleSetEdit} onRoutineDelete={onRoutineDelete} onRoutineUpdate={onRoutineUpdate} />
                  : <RoutineSet routine={routine} onSetEdit={handleSetEdit} />}
        </li>
    )
}

export default Routine