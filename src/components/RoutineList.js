import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import Routine from './Routine'

function RoutineList({ clients, onRoutinesChange }){
    const [routines, setRoutines] = useState([])
    const { clientId } = useParams()
    const history = useHistory()

    useEffect(() => {
        const newRoutines = (clients.filter(e => e.id == clientId)[0].routines)
        setRoutines(newRoutines)
    },[clientId])

    return(
        <React.Fragment>
            <button onClick={() => history.push("/")}>Go Home</button>
            <ul>
                {routines.map(e => <Routine key={e.id} routine={e}/>)}
            </ul>
        </React.Fragment>
    )
}

export default RoutineList