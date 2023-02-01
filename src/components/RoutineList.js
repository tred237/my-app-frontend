import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"

import NewRoutineForm from './NewRoutineForm'
import Routine from './Routine'

function RoutineList(){
    const [routines, setRoutines] = useState([])
    const [showForm, setShowForm] = useState(false)
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

    function handleRoutineUpdate(routineUpdates, routineId){
        const newRoutineList = routines.map(e => {
            if(e.id == routineId){
                for(const key in routineUpdates){
                    e[key] = routineUpdates[key]
                }
            }
            return e
        })

        setRoutines(newRoutineList)
    }

    function handleRoutineCreate(newRoutine){
        setRoutines([...routines, newRoutine])
        setShowForm(!showForm)
    }

    function handleShowFormState(e){
        e.preventDefault()
        setShowForm(!showForm)
    }

    return(
        <React.Fragment>
            <button onClick={() => history.push("/")}>Go Home</button>
            {showForm ? <NewRoutineForm clientId={clientId} onRoutineCreate={handleRoutineCreate} handleShowFormState={handleShowFormState} /> : <button onClick={() => setShowForm(!showForm)}>Add Routine</button>}
            <ul>
                {routines.map(e => <Routine key={e.id} 
                                            routine={e}
                                            clientId={clientId}
                                            onRoutineDelete={handleRoutineDelete} 
                                            onRoutineUpdate={handleRoutineUpdate} />)}
            </ul>
        </React.Fragment>
    )
}

export default RoutineList