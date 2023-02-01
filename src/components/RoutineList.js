import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"

import Routine from './Routine'

function RoutineList(){
    const [routines, setRoutines] = useState([])
    const { clientId } = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:9292/clients/${clientId}/routines`)
        .then(res => res.json())
        .then(data => setRoutines(data))
    },[clientId])

    function handleRoutineDelete(routineId){
        const newRoutineList = routines.filter(e => e.id !== routineId)
        setRoutines(newRoutineList)
    }

    function handleRoutineUpdate(routineUpdates){
        const newRoutineList = routines.map(e => {
            if(e.id == routineUpdates.id){
                for(const key in routineUpdates){
                    e[key] = routineUpdates[key]
                }
            }
            return e
        })

        setRoutines(newRoutineList)
    }

    return(
        <React.Fragment>
            <button onClick={() => history.push("/")}>Go Home</button>
            <ul>
                {routines.map(e => <Routine key={e.id} 
                                            routine={e} 
                                            onRoutineDelete={handleRoutineDelete} 
                                            onRoutineUpdate={handleRoutineUpdate} />)}
            </ul>
        </React.Fragment>
    )
}

export default RoutineList