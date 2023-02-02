import { useState } from 'react'

function NewRoutineForm({ clientId, onRoutineCreate, handleShowFormState }){
    const formDefault = {
        day: 'Monday',
        exercise: '',
        exercise_type: 'Strength',
        sets: '',
        reps: '',
        distance_miles: '',
        length_of_time_minutes: ''
    }

    const [formData, setFormData] = useState({...formDefault})

    function handleFormDataChange(e) {
        const numberFields = ['sets', 'reps', 'distance_miles', 'length_of_time_minutes']
        
        if(numberFields.includes(e.target.name) && !isNaN(Number(e.target.value))) {
            setFormData({...formData, [e.target.name]:e.target.value})
        } else if (!numberFields.includes(e.target.name)) {
            setFormData({...formData, [e.target.name]:e.target.value})
        }
    }

    function handleNewRoutineSubmit(e){
        e.preventDefault()
        const formDataCopy = {...formData}
        
        for (const key in formDataCopy){
            const keysToChange = ['sets', 'reps', 'distance_miles', 'length_of_time_minutes']
            if (keysToChange.includes(key) && formDataCopy[key] === '') formDataCopy[key] = null
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
        <form onSubmit={handleNewRoutineSubmit}>
            <label>Day of Week:
                <select name="day" onChange={handleFormDataChange}>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
            </label>
            <label>Exercise:
                <input type="text" name="exercise" value={formData.exercise} onChange={handleFormDataChange} required />
            </label>
            <label>Exercise Type:
                <select name="day" onChange={handleFormDataChange}>
                    <option value="Strength">Strength</option>
                    <option value="Cardio">Cardio</option>
                </select>
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
            <button onClick={handleShowFormState}>Cancel</button>
        </form>
    )
}

export default NewRoutineForm