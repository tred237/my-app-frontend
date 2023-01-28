import { useState } from 'react'

function ClientList({ client, onClientDelete, onClientNameUpdate }) {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(client.name)

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
            <button onClick={handleClientDelete}>Delete</button>    
            <button onClick={handleEditClick}>{edit ? "Save" : "Edit"}</button>
        </li>
    )
}

export default ClientList