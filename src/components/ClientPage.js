import ClientList from './ClientList'
import NewClientForm from './NewClientForm'

function ClientPage({ clients, onClientDelete, onNewClientSubmit, onClientNameUpdate }) {
    return(
        <div>
            <NewClientForm onNewClientSubmit={onNewClientSubmit} />
            <ul>
                {clients.map(e => <ClientList key={e.id} client={e} onClientDelete={onClientDelete} onClientNameUpdate={onClientNameUpdate} />)}
            </ul>
        </div>
    )
}

export default ClientPage