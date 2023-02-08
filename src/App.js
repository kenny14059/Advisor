import logo from './logo.svg';
import Home from './pages/Home';
import Aedvisor from './pages/Aedvisor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element= {<Home/> } />
          <Route path="/aedvisor" element= {<Aedvisor/> } />
          {/* <Route path="/a" element= {<Affliates/> } /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
