import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"

import NewRoutineForm from './NewRoutineForm'
import Routine from './Routine'
// import RoutineSummaryStats from './RoutineSummaryStats'

function RoutineList({ clients, setClients }){
    const [routines, setRoutines] = useState([])
    const [showForm, setShowForm] = useState(false)
    // const [summaryStats, setSummaryStats] = useState([])
    const { clientId } = useParams()
    const history = useHistory()

    useEffect(() => {
        if(clients.length !== 0) setRoutines(clients.find(e => e.id == clientId).routines)
    },[clients])

    // useEffect(() => {
    //     fetch(`http://localhost:9292/clients/${clientId}/routines/summary_stats`)
    //     .then(res => res.json())
    //     .then(data => setSummaryStats(data))
    // },[routines])

    function handleRoutineDelete(routineId){
        const newRoutineList = routines.filter(e => e.id !== routineId)
        const newClientList = clients.map(e => {
            if(e.id == clientId) e.routines = [...newRoutineList]
            return e
        })
        setClients(newClientList)
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
            {/* <RoutineSummaryStats summaryStats={summaryStats} /> */}
            {showForm ? <NewRoutineForm clientId={clientId} onRoutineCreate={handleRoutineCreate} handleShowFormState={handleShowFormState} /> : <button onClick={() => setShowForm(!showForm)}>Add Routine</button>}
            <ul>
                <p>Routines Per Week:</p>
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