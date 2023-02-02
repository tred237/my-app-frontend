function RoutineEditForm({ routineData, onRoutineEditSubmit, onRoutineChange }){    

    return(
        <form onSubmit={onRoutineEditSubmit}>
            <label>Day of Week: 
                <input type="text" name="day" value={routineData.day} onChange={onRoutineChange} required/>
            </label>
            <label>Exercise: 
                <input type="text" name="exercise" value={routineData.exercise} onChange={onRoutineChange} required/>
            </label>
            <label>Exercise Type: 
                <input type="text" name="exercise_type" value={routineData.exercise_type} onChange={onRoutineChange} required/>
            </label>
            <label>Sets: 
                <input type="text" name="sets" value={routineData.sets} onChange={onRoutineChange}/>
            </label>
            <label>Reps: 
                <input type="text" name="reps" value={routineData.reps} onChange={onRoutineChange}/>
            </label>
            <label>Distance (Miles): 
                <input type="text" name="distance_miles" value={routineData.distance_miles} onChange={onRoutineChange}/>
            </label>
            <label>Length of Time (Minutes): 
                <input type="text" name="length_of_time_minutes" value={routineData.length_of_time_minutes} onChange={onRoutineChange}/>
            </label>
            <button type="submit">Save</button>
        </form>
    )
}

export default RoutineEditForm