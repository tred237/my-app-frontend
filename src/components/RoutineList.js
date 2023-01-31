import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"

import Routine from './Routine'

function RoutineList({ onRoutineDelete, onRoutineUpdate }){
    const [routines, setRoutines] = useState([])
    const { clientId } = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:9292/routines/${clientId}`)
        .then(res => res.json())
        .then(data => setRoutines(data))
    },[clientId])

    function handleRoutineDeleteState(routineId){
        const newRoutineList = routines.filter(e => e.id !== routineId)
        setRoutines(newRoutineList)
    }

    function handleRoutineUpdateState(routineUpdates){
        console.log(routineUpdates)
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

    console.log(routines)
    return(
        <React.Fragment>
            <button onClick={() => history.push("/")}>Go Home</button>
            <ul>
                {routines.map(e => <Routine key={e.id} 
                                            routine={e} 
                                            onRoutineDelete={onRoutineDelete} 
                                            onRoutineDeleteState={handleRoutineDeleteState} 
                                            onRoutineUpdate={onRoutineUpdate} 
                                            onRoutineUpdateState={handleRoutineUpdateState} />)}
            </ul>
        </React.Fragment>
    )
}

export default RoutineList