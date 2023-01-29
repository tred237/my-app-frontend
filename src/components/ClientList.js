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
            .then(() => {onClientNameUpdate(client.id, name)})
        }

        setEdit(!edit)
    }

    return(
        <li>
            {edit ? <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> : name}
            <button onClick={() => history.push(`/${client.id}`)}>Routine</button>
            <button onClick={handleEditClick}>{edit ? "Save" : "Edit"}</button>
            <button onClick={handleClientDelete}>Delete</button>
        </li>
    )
}

export default ClientList