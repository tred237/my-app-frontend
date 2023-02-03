import { useState } from 'react'

import RoutineSet from "./RoutineSet"
import RoutineEdit from './RoutineEdit'

function Routine({ routine, clientId, numberFields, onRoutineDelete, onRoutineUpdate, toCamelCase }){
    const [edit, setEdit] = useState(false)

    function handleSetEdit(){
        setEdit(!edit)
    }

    return(
        <li>
            {edit ? <RoutineEdit routine={routine} 
                                 clientId={clientId}
                                 numberFields={numberFields}
                                 onSetEdit={handleSetEdit}
                                 onRoutineDelete={onRoutineDelete}
                                 onRoutineUpdate={onRoutineUpdate}
                                 toCamelCase={toCamelCase} />
                  : <RoutineSet routine={routine} onSetEdit={handleSetEdit} />}
        </li>
    )
}

export default Routine