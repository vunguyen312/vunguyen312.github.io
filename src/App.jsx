import './App.css';
import Home from './components/Home';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
