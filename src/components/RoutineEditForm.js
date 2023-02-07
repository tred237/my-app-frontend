function RoutineEditForm({ routineData, onRoutineEditSubmit, onRoutineChange, inputFieldGenerator }){

    return(
        <form onSubmit={onRoutineEditSubmit}>
            <ul>
            <li><label>Day of Week: 
                {inputFieldGenerator('day', routineData.day, onRoutineChange, true, 'client-edit-input')}
            </label></li>
            <li><label>Exercise: 
                {inputFieldGenerator('exercise', routineData.exercise, onRoutineChange, true, 'client-edit-input')}
            </label></li>
            <li><label>Exercise Type: 
                {inputFieldGenerator('exercise_type', routineData.exercise_type, onRoutineChange, true, 'client-edit-input')}
            </label></li>
            <li><label>Sets: 
                {inputFieldGenerator('sets', routineData.sets, onRoutineChange, false, 'client-edit-input')}
            </label></li>
            <li><label>Reps: 
                {inputFieldGenerator('reps', routineData.reps, onRoutineChange, false, 'client-edit-input')}
            </label></li>
            <li><label>Distance (Miles): 
                {inputFieldGenerator('distance_miles', routineData.distance_miles, onRoutineChange, false, 'client-edit-input')}
            </label></li>
            <li><label>Length of Time (Minutes): 
                {inputFieldGenerator('length_of_time_minutes', routineData.length_of_time_minutes, onRoutineChange, false, 'client-edit-input')}
            </label></li>
            <li><button type="submit">Save</button></li>
            </ul>
        </form>
    )
}

export default RoutineEditForm