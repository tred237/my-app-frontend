import React from 'react'
import { useState } from 'react'

function ClientEdit({ client, onSetEdit, onClientDelete, onClientNameUpdate, toCamelCase, inputFieldGenerator }){
    const [clientName, setClientName] = useState(client.name)

    function handleClientDelete() {
        fetch(`http://localhost:9292/clients/${client.id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(client)
        }).then(res => res.json())
        .then(data => onClientDelete(data.id))
    }

    function handleClientEditSubmit(e){
        e.preventDefault()
        const formattedClientName = toCamelCase(clientName)

        if(formattedClientName !== client.name){
            fetch(`http://localhost:9292/clients/${client.id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: formattedClientName})
            })
            .then(res => res.json())
            .then(() => onClientNameUpdate(client.id, formattedClientName))
        }

        onSetEdit()
    }

    return(
        <React.Fragment>
            <form onSubmit={handleClientEditSubmit}>
                {inputFieldGenerator('name', clientName, (e) => setClientName(e.target.value), true )}
                <button type="submit">Save</button>
            </form>
            <button onClick={onSetEdit}>Cancel</button>
            <button onClick={handleClientDelete}>Delete</button>
        </React.Fragment>
    )
}

export default ClientEdit