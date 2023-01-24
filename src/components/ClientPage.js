// delete a client
// create component for list
// add event listener delete button
// create a callback that deletes the client by its id
// refresh state on client list
import ClientList from './ClientList'

function ClientPage({ clients, onClientDelete }) {
    return(
        <div>
            <form>
                <label>Input Client Name:
                    <input type="text" name="client-name"/>
                </label>
                <input type="submit" />
            </form>
            <ul>
                {/* {clients.map(e => {
                    return <li key={e.id}>
                                {e.name}   <button>Delete</button>
                           </li>
                })} */}
                {clients.map(e => <ClientList key={e.id} client={e} onClientDelete={onClientDelete} />)}
            </ul>
        </div>
    )
}

export default ClientPage