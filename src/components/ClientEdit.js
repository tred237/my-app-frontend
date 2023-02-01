import { useState } from 'react'

function ClientEdit({ client, onSetEdit, onClientDelete, onClientNameUpdate}){
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

        if(clientName !== client.name){
            fetch(`http://localhost:9292/clients/${client.id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: clientName})
            })
            .then(res => res.json())
            .then(() => onClientNameUpdate(client.id, clientName))
        }

        onSetEdit()
    }

    return(
        <form onSubmit={handleClientEditSubmit}>
            <input type="text" name="name" value={clientName} onChange={(e) => setClientName(e.target.value)} required/>
            <button type="submit">Save</button>
            <button onClick={onSetEdit}>Cancel</button>
            <button onClick={handleClientDelete}>Delete</button>
        </form>
    )
}

export default ClientEdit