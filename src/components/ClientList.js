import { useState } from 'react'

import Client from './Client'
import NewClientForm from './NewClientForm'

function ClientList({ clients, onClientDelete, onNewClientSubmit, onClientNameUpdate }) {
    const [showForm, setShowForm] = useState(false)

    function handleShowFormState(e) {
        e.preventDefault()
        setShowForm(!showForm)
    }

    return(
        <div>
            {showForm ? <NewClientForm onNewClientSubmit={onNewClientSubmit} handleShowFormState={handleShowFormState} /> : <button onClick={() => setShowForm(!showForm)}>Add Client</button>}
            <ul>
                {clients.map(e => <Client key={e.id} client={e} onClientDelete={onClientDelete} onClientNameUpdate={onClientNameUpdate} />)}
            </ul>
        </div>
    )
}

export default ClientList