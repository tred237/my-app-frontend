// add a client
// create new component 
// add a form submit el on the form
// create a callback that creates a post request
// update state to show the new client
import ClientList from './ClientList'
import NewClientForm from './NewClientForm'

function ClientPage({ clients, onClientDelete }) {
    return(
        <div>
            {/* <form>
                <label>Input Client Name:
                    <input type="text" name="client-name"/>
                </label>
                <input type="submit" />
            </form> */}
            <NewClientForm />
            <ul>
                {clients.map(e => <ClientList key={e.id} client={e} onClientDelete={onClientDelete} />)}
            </ul>
        </div>
    )
}

export default ClientPage