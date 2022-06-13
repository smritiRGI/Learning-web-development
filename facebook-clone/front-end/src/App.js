import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import './App.css';
import Login from './Login.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Login/>
      </div>
    </Router>
  );
}

export default App;
