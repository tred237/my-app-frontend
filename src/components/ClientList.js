import Client from './Client'
import NewClientForm from './NewClientForm'

function ClientList({ clients, onClientDelete, onNewClientSubmit, onClientNameUpdate }) {
    return(
        <div>
            <NewClientForm onNewClientSubmit={onNewClientSubmit} />
            <ul>
                {clients.map(e => <Client key={e.id} client={e} onClientDelete={onClientDelete} onClientNameUpdate={onClientNameUpdate} />)}
            </ul>
        </div>
    )
}

export default ClientList