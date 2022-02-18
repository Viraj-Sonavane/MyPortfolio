import styles from "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact"
import Main from "./components/Main/Main";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Resume" element={<Resume/>} />
          </Routes>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
