import { useState } from 'react'

import ClientEdit from './ClientEdit'
import ClientSet from './ClientSet'

function Client({ client, onClientDelete, onClientNameUpdate, toCamelCase, inputFieldGenerator }) {
    const [edit, setEdit] = useState(false)

    function handleSetEdit(){
        setEdit(!edit)
    } 

    return(
        <p className="client-grid-item">
            {edit ? <ClientEdit client={client}
                                onSetEdit={handleSetEdit} 
                                onClientDelete={onClientDelete} 
                                onClientNameUpdate={onClientNameUpdate} 
                                toCamelCase={toCamelCase} 
                                inputFieldGenerator={inputFieldGenerator} />
                  : <ClientSet client={client} onSetEdit={handleSetEdit} />}
        </p>
    )
}

export default Client