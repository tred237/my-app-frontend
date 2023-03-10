import React from 'react'
import { useState } from 'react'

function NewClientForm({ onNewClientSubmit, handleShowFormState, toCamelCase, inputFieldGenerator }) {
    const formDefault = {name: ''}
    const [formData, setFormData] = useState({...formDefault})

    function handleFormData(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        const newClient = {...formData}
        newClient.name = toCamelCase(newClient.name)

        fetch('http://localhost:9292/clients',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newClient)
        })
        .then(res => res.json())
        .then(data => onNewClientSubmit(data))

        handleShowFormState()
        setFormData({...formDefault})
    }

    return(
        <div id="add-new-client">
            <form id="add-new-client-form" onSubmit={handleSubmit}>
                <label>Input Client Name:
                    {inputFieldGenerator('name', formData.name, handleFormData, true)}
                </label>
                
                <button type="submit">Submit</ button>
            </form>
            <button onClick={handleShowFormState}>Cancel</button>
        </div>
    )
}

export default NewClientForm