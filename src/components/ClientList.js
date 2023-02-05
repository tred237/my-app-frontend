import { useState } from 'react'

import Client from './Client'
import NewClientForm from './NewClientForm'

function ClientList({ clients, onClientDelete, onNewClientSubmit, onClientNameUpdate, toCamelCase, inputFieldGenerator }) {
    const [showForm, setShowForm] = useState(false)

    function handleShowFormState(e) {
        e.preventDefault()
        setShowForm(!showForm)
    }

    return(
        <div>
            {showForm ? <NewClientForm onNewClientSubmit={onNewClientSubmit} 
                                       handleShowFormState={handleShowFormState} 
                                       toCamelCase={toCamelCase} 
                                       inputFieldGenerator={inputFieldGenerator} /> 
                      : <button onClick={() => setShowForm(!showForm)}>Add Client</button>}
            <ul>
                {clients.map(e => <Client key={e.id} 
                                          client={e}
                                          onClientDelete={onClientDelete} 
                                          onClientNameUpdate={onClientNameUpdate} 
                                          toCamelCase={toCamelCase} 
                                          inputFieldGenerator={inputFieldGenerator} />)}
            </ul>
        </div>
    )
}

export default ClientList