import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import ClientList from './ClientList'
import RoutineList from './RoutineList'

function App() {
  const [clients, setClients] = useState([])
  // const numberFields = ['sets', 'reps', 'distance_miles', 'length_of_time_minutes']

  useEffect(() => {
    fetch('http://localhost:9292/clients')
    .then((res) => res.json())
    .then(data => {
      // check for routines
      // const newList = data.map(e => {
      //   if ('routines' in e) e.routines = []
      //   return e
      // })
      // end
      setClients(data)
      // setClients(newList)
    })
  },[])

  console.log(clients)

  function handleClientDeleteClick(clientId){
    const newClientList = clients.filter(e => e.id !== clientId)
    setClients(newClientList)
  }

  function handleNewClientSubmit(client){
    // client.routines = []
    setClients([...clients, client])
  }

  function handleClientNameUpdate(clientId, clientName){
    const newClientList = clients.map(e => {
      if(e.id === clientId) e.name = clientName
      return e
    })

    setClients(newClientList)
  }

  function toCamelCase(data){
    const formattedData = data.split(' ').map(e => {
                            const splitString = e.split('')
                            splitString[0] = splitString[0].toUpperCase()
                            return splitString.join('')
                          }).join(' ')

    return formattedData
  }

  return (
    <div>
      <header>
        <p>Training Catalog</p>
      </header>
      <Switch>
        <Route exact path="/">
          <ClientList clients={clients} onClientDelete={handleClientDeleteClick} onNewClientSubmit={handleNewClientSubmit} onClientNameUpdate={handleClientNameUpdate} toCamelCase={toCamelCase} />
        </Route>
        <Route exact path="/clients/:clientId/routines">
          <RoutineList clients={clients} setClients={setClients} toCamelCase={toCamelCase} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
