import React from "react"
import { useHistory } from 'react-router-dom'

function ClientSet({ client, onSetEdit }){
    const history = useHistory()

    return (
        <React.Fragment>
            <p id="client-name">{client.name}</p>
            <button className="client-button" onClick={() => history.push(`/clients/${client.id}/routines`)}>Routine</button>
            <button className="client-button" onClick={onSetEdit}>Edit</button>
        </React.Fragment>
    )
}

export default ClientSet