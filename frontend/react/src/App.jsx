import UserProfile from "./UserProfile.jsx";

function App() {
    const name = "John";
    return <div>
                <UserProfile/>
                <p>test {name} </p>
                <h1>hello {name}</h1>
           </div>
}

export default App;