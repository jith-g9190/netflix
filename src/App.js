
import './App.css';
import Row from './Row'
import requests from './requests'
import Nav from './Nav'
function App() {
  return (
    <div className="App">

<Nav/>



 <Row

 title="NETFLIX ORIGINALS"
  fetchUrl={requests.fetchNetflixOriginals} 
  />
  <Row
  title="Trending"
  fetchUrl={requests.fetchTrending}
  /> 
     <Row
  title="TopRated"
  fetchUrl={requests.fetchTopRated}
  /> 
  
   <Row
  title="ActionMovies"
  fetchUrl={requests.fetchActionMovies}
  />
  <Row
  title="ComedyMovies"
  fetchUrl={requests.fetchComedyMovies}
  />
  <Row
  title="HorrorMovies"
  fetchUrl={requests.fetchHorrorMovies}
  />
<Row
  title="RomanceMovies"
  fetchUrl={requests.fetchRomanceMovies}
  />
  <Row
  title="Documentaries"
  fetchUrl={requests.fetchDocumentaries}
  />

    </div>
  );
}

export default App;
