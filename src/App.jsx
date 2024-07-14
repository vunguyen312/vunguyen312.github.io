import './App.css';
import './styles.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProjectsPage from './components/ProjectsPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
