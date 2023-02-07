function RoutineSummaryStats({ summaryStats }){
    return(
        <div>
            <h3>Summary Stats Per Week:</h3>
            <ul>
                <li>{`Training Days Per Week: ${summaryStats.days_worked_out}`}</li>
                <li>{`Exercises Per Week: ${summaryStats.unique_exercises}`}</li>
                <li>{`Sets Per Week: ${summaryStats.total_sets}`}</li>
                <li>{`Reps Per Week: ${summaryStats.total_reps}`}</li>
                <li>{`Miles Per Week: ${summaryStats.total_miles}`}</li>
                <li>{`Minutes Per Week: ${summaryStats.total_length}`}</li>
            </ul>
        </div>
    )
}

export default RoutineSummaryStats