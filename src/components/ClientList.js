function ClientList({ client, onClientDelete }) {
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

    return(
        <li>
            {client.name}    <button onClick={handleClientDelete}>Delete</button>
        </li>
    )
}

export default ClientList