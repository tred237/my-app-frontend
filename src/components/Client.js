import { useState } from 'react'

import ClientEdit from './ClientEdit'
import ClientSet from './ClientSet'

function Client({ client, onClientDelete, onClientNameUpdate }) {
    const [edit, setEdit] = useState(false)

    function handleSetEdit(){
        setEdit(!edit)
    } 

    return(
        <li>
            {edit ? <ClientEdit client={client} onSetEdit={handleSetEdit} onClientDelete={onClientDelete} onClientNameUpdate={onClientNameUpdate} />
                  : <ClientSet client={client} onSetEdit={handleSetEdit} />}
        </li>
    )
}

export default Client