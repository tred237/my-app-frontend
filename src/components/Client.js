import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Client({ client, onClientDelete, onClientNameUpdate }) {
    const [edit, setEdit] = useState(false)
    const [clientName, setClientName] = useState(client.name)
    const history = useHistory()

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

        setEdit(!edit)
    }

    return(
        <li>
            <form onSubmit={handleClientEditSubmit}>
                {edit ? <input type="text" name="name" value={clientName} onChange={(e) => setClientName(e.target.value)} required/> : client.name}
                {!edit ? <button onClick={() => history.push(`/clients/${client.id}/routines`)}>Routine</button> : null}
                <button type="submit">{edit ? "Save" : "Edit"}</button>
                {edit ? <button onClick={() => setEdit(!edit)}>Cancel</button> : null}
                {edit ? <button onClick={handleClientDelete}>Delete</button> : null}
            </form>
        </li>
    )
}

export default Client