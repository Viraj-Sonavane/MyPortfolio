import styles from "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
