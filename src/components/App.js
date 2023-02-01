import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import ClientPage from './ClientPage'
import RoutineList from './RoutineList'

function App() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/clients')
    .then((res) => res.json())
    .then(data => setClients(data))
  },[])

  console.log(clients)

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
        <p>Training Catalog</p>
      </header>
      <Switch>
        <Route exact path="/">
          <ClientPage clients={clients} onClientDelete={handleClientDeleteClick} onNewClientSubmit={handleNewClientSubmit} onClientNameUpdate={handleClientNameUpdate} />
        </Route>
        <Route exact path="/clients/:clientId/routines">
          <RoutineList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
