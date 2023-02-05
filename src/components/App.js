import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import ClientList from './ClientList'
import RoutineList from './RoutineList'

function App() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/clients')
    .then((res) => res.json())
    .then(data => setClients(data))
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

  function toCamelCase(data){
    const formattedData = data.split(' ').map(e => {
                            const splitString = e.split('')
                            splitString[0] = splitString[0].toUpperCase()
                            return splitString.join('')
                          }).join(' ')

    return formattedData
  }

  function inputFieldGenerator(name, valueField, cb, required){
    return <input type="text" name={name} value={valueField} onChange={cb} required={required ? true : false} />
  }

  return (
    <div>
      <header>
        <p>Training Catalog</p>
      </header>
      <Switch>
        <Route exact path="/">
          <ClientList clients={clients} 
                      onClientDelete={handleClientDeleteClick} 
                      onNewClientSubmit={handleNewClientSubmit} 
                      onClientNameUpdate={handleClientNameUpdate} 
                      toCamelCase={toCamelCase} 
                      inputFieldGenerator={inputFieldGenerator} />
        </Route>
        <Route exact path="/clients/:clientId/routines">
          <RoutineList clients={clients} setClients={setClients} toCamelCase={toCamelCase} inputFieldGenerator={inputFieldGenerator} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
