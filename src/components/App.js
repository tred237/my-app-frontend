import {useState, useEffect} from 'react'
import ClientList from './ClientList'

function App() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/clients')
    .then((res) => res.json())
    .then(data => {
      setClients(data)  
    })
  },[])

  return (
    <div>
      <header>
        <p>
          Training Catalog This is a test
        </p>
      </header>
      <ClientList clients={clients} />
    </div>
  );
}

export default App;
