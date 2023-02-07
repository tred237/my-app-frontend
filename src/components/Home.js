import { useHistory } from "react-router-dom"

function Home() {
    const history = useHistory()

    return(
        <div id="home-title">
            <h1>My Gym Training Catalog</h1>
            <button onClick={() => history.push("/clients")}>View Clients</button>
        </div>
    )
}

export default Home