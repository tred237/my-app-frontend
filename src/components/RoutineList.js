import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"

import NewRoutineForm from './NewRoutineForm'
import Routine from './Routine'
// import RoutineSummaryStats from './RoutineSummaryStats'

function RoutineList({ clients, setClients, toCamelCase }){
    const [routines, setRoutines] = useState([])
    const [showForm, setShowForm] = useState(false)
    // const [summaryStats, setSummaryStats] = useState([])
    const { clientId } = useParams()
    const history = useHistory()
    const numberFields = ['sets', 'reps', 'distance_miles', 'length_of_time_minutes']

    useEffect(() => {
        if(clients.length !== 0) {
            const fetchedClient = clients.find(e => e.id == clientId)
            setRoutines(fetchedClient.routines ? fetchedClient.routines : [])
        }
    },[clients])

    // console.log(routines)

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
                    numberFields.includes(key) && routineUpdates[key] !== null ? e[key] = Number(routineUpdates[key]) : e[key] = routineUpdates[key]
                }
            }
            return e
        })

        const newClientList = clients.map(e => {
            if(e.id == clientId) e.routines = [...newRoutineList]
            return e
        })

        setClients(newClientList)
    }

    function handleRoutineCreate(newRoutine){
        const newClientList = clients.map(e => {
            if(e.id == clientId) e.routines = [...routines, newRoutine]
            return e
        })
        setClients(newClientList)
        setShowForm(!showForm)
    }

    function handleSetShowForm(e){
        setShowForm(!showForm)
    }

    return(
        <React.Fragment>
            <button onClick={() => history.push("/")}>Go Home</button>
            {/* <RoutineSummaryStats summaryStats={summaryStats} /> */}
            {showForm ? <NewRoutineForm clientId={clientId}
                                        numberFields={numberFields}
                                        onRoutineCreate={handleRoutineCreate} 
                                        onSetShowForm={handleSetShowForm} 
                                        toCamelCase={toCamelCase} /> 
                      : <button onClick={() => setShowForm(!showForm)}>Add Routine</button>}
            <ul>
            <p>Routines Per Week:</p>
            {routines.map(e => <Routine key={e.id} 
                                        routine={e}
                                        clientId={clientId}
                                        numberFields={numberFields}
                                        onRoutineDelete={handleRoutineDelete} 
                                        onRoutineUpdate={handleRoutineUpdate} 
                                        toCamelCase={toCamelCase} />)}
            </ul>
        </React.Fragment>
    )
}

export default RoutineList