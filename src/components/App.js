import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import ClientPage from './ClientPage'

function App() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/clients')
    .then((res) => res.json())
    .then(data => {
      console.log(data)
      setClients(data)  
    })
  },[])

  function handleClientDeleteClick(clientId){
    const newClientList = clients.filter(e => e.id !== clientId)
    setClients(newClientList)
  }

  function handleNewClientSubmit(client){
    setClients([...clients, client])
  }

  function handleClientNameUpdate(clientId, clientName){
    const newClientList = clients.map(e => {
      if(e.id === clientId) e.name = clientName
      return e
    })

    setClients(newClientList)
  }

  return (
    <div>
      <header>
        <p>
          Training Catalog This is a test
        </p>
      </header>
      <Route exact path="/">
        <ClientPage clients={clients} onClientDelete={handleClientDeleteClick} onNewClientSubmit={handleNewClientSubmit} onClientNameUpdate={handleClientNameUpdate} />
      </Route>
    </div>
  );
}

export default App;
