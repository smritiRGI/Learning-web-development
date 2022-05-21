import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './pages/Home.js';
import About from './pages/About';
import Nav from './Nav';
import Articles from './pages/Articles';
import ArticlePage from './pages/ArticlePage';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/articles" element={<Articles/>}/>
          <Route exact path="/articles/:name" element={<ArticlePage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
