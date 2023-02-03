import React from 'react'
import { useState } from 'react'

function NewRoutineForm({ clientId, onRoutineCreate, onSetShowForm }){
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
        const numberFields = ['sets', 'reps', 'distance_miles', 'length_of_time_minutes']
        
        if(numberFields.includes(e.target.name) && !isNaN(Number(e.target.value)) && !e.target.value.includes('.') ) {
            setFormData({...formData, [e.target.name]:e.target.value})
        } else if (!numberFields.includes(e.target.name)) {
            setFormData({...formData, [e.target.name]:e.target.value})
        }
    }

    function camelCase(data){
        const formattedData = data.split(' ').map(e => {
                                const splitString = e.split('')
                                splitString[0] = splitString[0].toUpperCase()
                                return splitString.join('')
                              }).join(' ')

        return formattedData
    }

    function handleNewRoutineSubmit(e){
        e.preventDefault()
        const formDataCopy = {...formData}
        
        for (const key in formDataCopy){
            const numericKeys = ['sets', 'reps', 'distance_miles', 'length_of_time_minutes']
            if (numericKeys.includes(key) && formDataCopy[key] === '') {
                formDataCopy[key] = null
            } else if (!numericKeys.includes(key)) {
                formDataCopy[key] = camelCase(formDataCopy[key])
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
                    <input type="text" name="day" value={formData.day} onChange={handleFormDataChange} required />
                </label>
                <label>Exercise:
                    <input type="text" name="exercise" value={formData.exercise} onChange={handleFormDataChange} required />
                </label>
                <label>Exercise Type:
                    <input type="text" name="exercise_type" value={formData.exercise_type} onChange={handleFormDataChange} required />
                </label>
                <label>Sets:
                    <input type="text" name="sets" value={formData.sets} onChange={handleFormDataChange} />
                </label>
                <label>Reps:
                    <input type="text" name="reps" value={formData.reps} onChange={handleFormDataChange}/>
                </label>Distance (Miles):
                <label>
                    <input type="text" name="distance_miles" value={formData.distance_miles} onChange={handleFormDataChange} />
                </label>
                <label>Length of Time (Minutes):
                    <input type="text" name="length_of_time_minutes" value={formData.length_of_time_minutes} onChange={handleFormDataChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <button onClick={onSetShowForm}>Cancel</button>
        </div>
    )
}

export default NewRoutineForm