import { useState } from 'react'

function NewClientForm({ onNewClientSubmit }) {
    const formDefault = {name: ''}
    const [formData, setFormData] = useState({...formDefault})

    function handleFormData(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        const newClient = {...formData}
        fetch('http://localhost:9292/clients',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newClient)
        }).then(res => res.json())
        .then(data => onNewClientSubmit(data))
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Input Client Name:
                <input type="text" name="name" onChange={handleFormData}/>
            </label>
            <button type="submit">Submit</ button>
        </form>
    )
}

export default NewClientForm