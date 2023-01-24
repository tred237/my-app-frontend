import {useState, useEffect} from 'react'
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

  function handleClientDeleteClick(client){
    const newClientList = clients.filter(e => e.id !== client.id)
    setClients(newClientList)
  }

  function handleNewClientSubmit(client){
    setClients([...clients, client])
  }

  return (
    <div>
      <header>
        <p>
          Training Catalog This is a test
        </p>
      </header>
      <ClientPage clients={clients} onClientDelete={handleClientDeleteClick} onNewClientSubmit={handleNewClientSubmit} />
    </div>
  );
}

export default App;
