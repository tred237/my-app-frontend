function RoutineEditForm({ routineData, onRoutineEditSubmit, onRoutineChange, inputFieldGenerator }){

    return(
        <form onSubmit={onRoutineEditSubmit}>
            <label>Day of Week: 
                {inputFieldGenerator('day', routineData.day, onRoutineChange, true)}
            </label>
            <label>Exercise: 
                {inputFieldGenerator('exercise', routineData.exercise, onRoutineChange, true)}
            </label>
            <label>Exercise Type: 
                {inputFieldGenerator('exercise_type', routineData.exercise_type, onRoutineChange, true)}
            </label>
            <label>Sets: 
                {inputFieldGenerator('sets', routineData.sets, onRoutineChange, false)}
            </label>
            <label>Reps: 
                {inputFieldGenerator('reps', routineData.reps, onRoutineChange, false)}
            </label>
            <label>Distance (Miles): 
                {inputFieldGenerator('distance_miles', routineData.distance_miles, onRoutineChange, false)}
            </label>
            <label>Length of Time (Minutes): 
                {inputFieldGenerator('length_of_time_minutes', routineData.length_of_time_minutes, onRoutineChange, false)}
            </label>
            <button type="submit">Save</button>
        </form>
    )
}

export default RoutineEditForm