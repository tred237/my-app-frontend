import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function ClientList({ client, onClientDelete, onClientNameUpdate }) {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(client.name)
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

    function handleEditClick(){
        if(name !== client.name){
            fetch(`http://localhost:9292/clients/${client.id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: name})
            })
            .then(res => res.json())
            .then(() => onClientNameUpdate(client.id, name))
        }

        setEdit(!edit)
    }

    return(
        <li>
            {edit ? <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> : name}
            {!edit ? <button onClick={() => history.push(`/clients/${client.id}/routines`)}>Routine</button> : null}
            <button onClick={handleEditClick}>{edit ? "Save" : "Edit"}</button>
            {edit ? <button onClick={() => handleEditClick(!edit)}>Cancel</button> : null}
            {edit ? <button onClick={handleClientDelete}>Delete</button> : null}
        </li>
    )
}

export default ClientList