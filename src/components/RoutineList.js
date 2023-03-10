import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"

import NewRoutineForm from './NewRoutineForm'
import Routine from './Routine'
import RoutineSummaryStats from './RoutineSummaryStats'

function RoutineList({ clients, setClients, toCamelCase, inputFieldGenerator }){
    const [client, setClient] = useState([])
    const [routines, setRoutines] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [summaryStats, setSummaryStats] = useState([])
    const { clientId } = useParams()
    const history = useHistory()
    const numberFields = ['sets', 'reps', 'distance_miles', 'length_of_time_minutes']

    useEffect(() => {
        if(clients.length !== 0) {
            const fetchedClient = clients.find(e => e.id == clientId)
            setClient(fetchedClient)
            setRoutines(fetchedClient.routines ? fetchedClient.routines : [])
        }
    },[clients])
    
    useEffect(() => {
        fetch(`http://localhost:9292/clients/${clientId}/routines/summary_stats`)
        .then(res => res.json())
        .then(data => setSummaryStats(data))
    },[routines])

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
        <div id="routines-page">
            <h1 className="top-page-title">Routines</h1>
            <button onClick={() => history.push("/clients")}>View Clients</button>
            <h2>{`${client.name} - ${clientId}`}</h2>
            <hr color='black' />
            <RoutineSummaryStats summaryStats={summaryStats} />
            <hr color='black' />
            {showForm ? <NewRoutineForm clientId={clientId}
                                        numberFields={numberFields}
                                        onRoutineCreate={handleRoutineCreate} 
                                        onSetShowForm={handleSetShowForm} 
                                        toCamelCase={toCamelCase}
                                        inputFieldGenerator={inputFieldGenerator} /> 
                      : <button onClick={() => setShowForm(!showForm)}>Add Routine</button>}
            <h3>Routines Per Week:</h3>
            <div id="routines-grid">
            {routines.map(e => <Routine key={e.id} 
                                        routine={e}
                                        clientId={clientId}
                                        numberFields={numberFields}
                                        onRoutineDelete={handleRoutineDelete} 
                                        onRoutineUpdate={handleRoutineUpdate} 
                                        toCamelCase={toCamelCase}
                                        inputFieldGenerator={inputFieldGenerator} />)}
            </div>
        </div>
    )
}

export default RoutineList