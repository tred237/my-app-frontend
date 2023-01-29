import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"

import Routine from './Routine'

function RoutineList({ clients, onRoutineDelete }){
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

    return(
        <React.Fragment>
            <button onClick={() => history.push("/")}>Go Home</button>
            <ul>
                {routines.map(e => <Routine key={e.id} routine={e} onRoutineDelete={onRoutineDelete} onRoutineDeleteState={handleRoutineDeleteState} />)}
            </ul>
        </React.Fragment>
    )
}

export default RoutineList