import { useState } from 'react'

import ClientEdit from './ClientEdit'
import ClientSet from './ClientSet'

function Client({ client, onClientDelete, onClientNameUpdate, toCamelCase, inputFieldGenerator }) {
    const [edit, setEdit] = useState(false)

    function handleSetEdit(){
        setEdit(!edit)
    } 

    return(
        <div className="client-grid-item">
            {edit ? <ClientEdit client={client}
                                onSetEdit={handleSetEdit} 
                                onClientDelete={onClientDelete} 
                                onClientNameUpdate={onClientNameUpdate} 
                                toCamelCase={toCamelCase} 
                                inputFieldGenerator={inputFieldGenerator} />
                  : <ClientSet client={client} onSetEdit={handleSetEdit} />}
        </div>
    )
}

export default Client