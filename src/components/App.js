import {useState, useEffect} from 'react'

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
      <div>
        {
          clients.map(e => {     
              console.log(e)
              return <p>{`${e.name}`}</p>
          })
        }
      </div>
    </div>
  );
}

export default App;
