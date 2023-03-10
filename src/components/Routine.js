import { useState } from 'react'

import RoutineSet from "./RoutineSet"
import RoutineEdit from './RoutineEdit'

function Routine({ routine, clientId, numberFields, onRoutineDelete, onRoutineUpdate, toCamelCase, inputFieldGenerator }){
    const [edit, setEdit] = useState(false)

    function handleSetEdit(){
        setEdit(!edit)
    }

    return(
        <div className="routines-grid-item">
            {edit ? <RoutineEdit routine={routine} 
                                 clientId={clientId}
                                 numberFields={numberFields}
                                 onSetEdit={handleSetEdit}
                                 onRoutineDelete={onRoutineDelete}
                                 onRoutineUpdate={onRoutineUpdate}
                                 toCamelCase={toCamelCase}
                                 inputFieldGenerator={inputFieldGenerator} />
                  : <RoutineSet routine={routine} onSetEdit={handleSetEdit} />}
        </div>
    )
}

export default Routine