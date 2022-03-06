import styles from "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact"
import Main from "./components/Main/Main";
import MySkills from "./components/MySkills/MySkills";
import About from "./components/About/About";
import MyWork from "./components/MyWork/MyWork";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Resume" element={<Resume/>} />
            <Route path="/Projects" element={<MySkills/>}/>
            <Route path="/About" element={<About/>}/>
          </Routes>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
