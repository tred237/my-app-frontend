function RoutineSummaryStats({ summaryStats }){
    return(
        <ul>
            <p>Summary Stats Per Week:</p>
            <li>{`Training Days Per Week: ${summaryStats.days_worked_out}`}</li>
            <li>{`Exercises Per Week: ${summaryStats.unique_exercises}`}</li>
            <li>{`Sets Per Week: ${summaryStats.total_sets}`}</li>
            <li>{`Reps Per Week: ${summaryStats.total_reps}`}</li>
            <li>{`Miles Per Week: ${summaryStats.total_miles}`}</li>
            <li>{`Minutes Per Week: ${summaryStats.total_length}`}</li>
        </ul>
    )
}

export default RoutineSummaryStats