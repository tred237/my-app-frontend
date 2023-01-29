import React from 'react'

function RoutineEdit() {
    return(
        <React.Fragment>
            <label for="day">Day: </label>
            <input type="text" name="day" />
            <label for="exercise">Exercise: </label>
            <input type="text" name="exercise" />
            <label for="exercise_type">Exercise Type: </label>
            <input type="text" name="exercise_type" />
            <label for="sets">Sets: </label>
            <input type="text" name="sets" />
            <label for="reps">Reps: </label>
            <input type="text" name="reps" />
            <label for="distance">Distance (Miles): </label>
            <input type="text" name="distance" />
            <label for="time">Length of Time (Minutes): </label>
            <input type="text" name="time" />
        </React.Fragment>
    )
}

export default RoutineEdit