import React from "react"
import { useHistory } from 'react-router-dom'

function ClientSet({ client, onSetEdit }){
    const history = useHistory()

    return (
        <React.Fragment>
            {client.name}
            <button onClick={() => history.push(`/clients/${client.id}/routines`)}>Routine</button>
            <button onClick={onSetEdit}>Edit</button>
        </React.Fragment>
    )
}

export default ClientSet