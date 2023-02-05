import React from 'react'
import { useState } from 'react'

function NewRoutineForm({ clientId, numberFields, onRoutineCreate, onSetShowForm, toCamelCase, inputFieldGenerator }){
    const formDefault = {
        day: '',
        exercise: '',
        exercise_type: '',
        sets: '',
        reps: '',
        distance_miles: '',
        length_of_time_minutes: ''
    }

    const [formData, setFormData] = useState({...formDefault})

    function handleFormDataChange(e) {
        if(numberFields.includes(e.target.name) && !isNaN(Number(e.target.value)) && !e.target.value.includes('.') ) {
            setFormData({...formData, [e.target.name]:e.target.value})
        } else if (!numberFields.includes(e.target.name)) {
            setFormData({...formData, [e.target.name]:e.target.value})
        }
    }

    function handleNewRoutineSubmit(e){
        e.preventDefault()
        const formDataCopy = {...formData}
        
        for (const key in formDataCopy){
            if (numberFields.includes(key) && formDataCopy[key] === '') {
                formDataCopy[key] = null
            } else if (!numberFields.includes(key)) {
                formDataCopy[key] = toCamelCase(formDataCopy[key])
            }
        }

        fetch(`http://localhost:9292/clients/${clientId}/routines`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataCopy)
        })
        .then(resp => resp.json())
        .then(data => onRoutineCreate(data))

        setFormData({...formDefault})
    }

    return(
        <div>
            <form onSubmit={handleNewRoutineSubmit}>
                <label>Day of Week:
                    {inputFieldGenerator('day', formData.day, handleFormDataChange, true)}
                </label>
                <label>Exercise:
                    {inputFieldGenerator('exercise', formData.exercise, handleFormDataChange, true)}
                </label>
                <label>Exercise Type:
                    {inputFieldGenerator('exercise_type', formData.exercise_type, handleFormDataChange, true)}
                </label>
                <label>Sets:
                    {inputFieldGenerator('sets', formData.sets, handleFormDataChange, false)}
                </label>
                <label>Reps:
                    {inputFieldGenerator('reps', formData.reps, handleFormDataChange, false)}
                </label>Distance (Miles):
                <label>
                    {inputFieldGenerator('distance_miles', formData.distance_miles, handleFormDataChange, false)}
                </label>
                <label>Length of Time (Minutes):
                    {inputFieldGenerator('length_of_time_minutes', formData.length_of_time_minutes, handleFormDataChange, false)}
                </label>
                <button type="submit">Submit</button>
            </form>
            <button onClick={onSetShowForm}>Cancel</button>
        </div>
    )
}

export default NewRoutineForm