import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import MyWork from "./components/MyWork/MyWork";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Sidebar/>
      <Main/>
      <MyWork/>
    </div>
  );
}

export default App;
