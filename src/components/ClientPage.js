import ClientList from './ClientList'
import NewClientForm from './NewClientForm'

function ClientPage({ clients, onClientDelete, onNewClientSubmit }) {
    return(
        <div>
            <NewClientForm onNewClientSubmit={onNewClientSubmit} />
            <ul>
                {clients.map(e => <ClientList key={e.id} client={e} onClientDelete={onClientDelete} />)}
            </ul>
        </div>
    )
}

export default ClientPage