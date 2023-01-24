import {useState, useEffect} from 'react'

function App() {
  const {clients, setClients} = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/clients')
    .then((res) => res.json())
    .then(data => console.log(data))
  },[])

  return (
    <div>
      <header>
        <p>
          Training Catalog This is a test
        </p>
      </header>
        <p>test</p>
    </div>
  );
}

export default App;
