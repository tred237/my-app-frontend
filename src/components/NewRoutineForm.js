import { useState } from 'react'

function NewRoutineForm(){
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
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <form>
            <label>Day of Week:
                <input type="text" name="day" value={formData.day} onChange={handleFormDataChange} />
            </label>
            <label>Exercise:
                <input type="text" name="exercise" value={formData.exercise} onChange={handleFormDataChange} />
            </label>
            <label>Exercise Type:
                <input type="text" name="exercise_type" value={formData.exercise_type} onChange={handleFormDataChange} />
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
    )
}

export default NewRoutineForm