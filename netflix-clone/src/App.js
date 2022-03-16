import Row from './Row';
import './App.css';
import requests  from './requests';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchURL = {requests.fetchNetflixOriginals} />
      <Row title="Trending NOW" fetchURL = {requests.fetchTrending} />
      <Row title="Horror Movies" fetchURL = {requests.fetchHorror} />
      <Row title="Drama Movies" fetchURL = {requests.fetchDrama} />
      <Row title="Comedy Movies" fetchURL = {requests.fetchComedy} />
      <Row title="Animation Movies" fetchURL = {requests.fetchAnimation} />
      <Row title="Thriller Movies" fetchURL = {requests.fetchThriller} />
    </div>
  );
}

export default App;
