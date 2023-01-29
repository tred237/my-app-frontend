import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

function RoutineList({ clients, onRoutinesChange }){
    const [routines, setRoutines] = useState([])
    const { clientId } = useParams()


    useEffect(() => {
        const newRoutines = (clients.filter(e => e.id == clientId)[0].routines)
        setRoutines(newRoutines)
    },[clientId])

    return(
        <ul>
            {routines.map(e => console.log(e))}
        </ul>
    )
}

export default RoutineList