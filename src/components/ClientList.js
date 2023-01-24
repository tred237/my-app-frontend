function ClientList({ clients }) {
    return(
        <div>
            <form>
                <label>Input Client Name:
                    <input type="text" name="client-name"/>
                </label>
                <input type="submit" />
            </form>
            <ul>
                {clients.map(e => {
                    return <li key={e.id}>
                                {e.name}   <button>Delete</button>
                           </li>
                })}
            </ul>
        </div>
    )
}

export default ClientList