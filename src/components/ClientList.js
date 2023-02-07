import { useState } from 'react'

import Client from './Client'
import NewClientForm from './NewClientForm'

function ClientList({ clients, onClientDelete, onNewClientSubmit, onClientNameUpdate, toCamelCase, inputFieldGenerator }) {
    const [showForm, setShowForm] = useState(false)

    function handleShowFormState() {
        setShowForm(!showForm)
    }

    return(
        <div id="client-list">
            <h1 className="top-page-title">Clients</h1>
            {showForm ? <NewClientForm onNewClientSubmit={onNewClientSubmit} 
                                       handleShowFormState={handleShowFormState} 
                                       toCamelCase={toCamelCase} 
                                       inputFieldGenerator={inputFieldGenerator} /> 
                      : <button onClick={() => setShowForm(!showForm)}>Add Client</button>}
            <div id="client-grid">
                {clients.map(e => <Client key={e.id} 
                                          client={e}
                                          onClientDelete={onClientDelete} 
                                          onClientNameUpdate={onClientNameUpdate} 
                                          toCamelCase={toCamelCase} 
                                          inputFieldGenerator={inputFieldGenerator} />)}
            </div>
        </div>
    )
}

export default ClientList