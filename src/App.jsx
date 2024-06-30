import './App.css';
import './styles.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
