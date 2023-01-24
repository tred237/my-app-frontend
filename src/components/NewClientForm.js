import { useState } from 'react'

function NewClientForm() {
    const formDefault = {name: ''}
    const [formData, setFormData] = useState({...formDefault})

    function handleFormData(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <form >
            <label>Input Client Name:
                <input type="text" name="name" onChange={handleFormData}/>
            </label>
            <input type="submit" />
        </form>
    )
}

export default NewClientForm