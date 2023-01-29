function Routine({ routine, onRoutineDelete, onRoutineDeleteState }){
    function handleRoutineDelete(){
        fetch(`http://localhost:9292/routines/${routine.id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(routine)
        })
        .then(res => res.json())
        .then(data => {
            onRoutineDelete(data.id, data.client_id)
            onRoutineDeleteState(data.id)
        })
    }

    return(
        <li>
            <p>Day: {routine.day}</p>
            <p>Exercise: {routine.exercise}</p>
            <p>Type: {routine.exercise_type}</p>
            <p>Sets: {routine.sets}</p>
            <p>Reps: {routine.reps}</p>
            <p>Distance (Miles): {routine.distance_in_miles}</p>
            <p>Length of Time (Minutes): {routine.length_of_time_minutes}</p>
            <button onClick={handleRoutineDelete}>Delete</button>
            <button>Edit</button>
        </li>
    )
}

export default Routine