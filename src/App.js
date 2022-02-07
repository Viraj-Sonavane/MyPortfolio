import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;
