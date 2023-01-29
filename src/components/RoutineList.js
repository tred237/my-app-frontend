import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Routine from './Routine'

function RoutineList({ clients, onRoutinesChange }){
    const [routines, setRoutines] = useState([])
    const { clientId } = useParams()


    useEffect(() => {
        const newRoutines = (clients.filter(e => e.id == clientId)[0].routines)
        setRoutines(newRoutines)
    },[clientId])

    return(
        <ul>
            {routines.map(e => <Routine key={e.id} routine={e}/>)}
        </ul>
    )
}

export default RoutineList