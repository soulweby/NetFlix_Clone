import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Row from "./components/Row";
import './App.scss';
import requests from "./Request";
// import QuickView from "./components/QuickView";


function App() {
  return (
    <div className="App">

    <Nav />
    <Banner />
    {/* <QuickView /> */}
    <Row  title="Programmes originaux Netflix"
                fetchUrl={requests.fectchNetflixOriginals} isPoster={true} />
    <Row  title="Tendances actuelles"
                fetchUrl={requests.fetchTrending} />
    <Row  title="Les mieux notés"
                fetchUrl={requests.fetchTopRated} />
    <Row  title="Film d'Action"
                fetchUrl={requests.fetchActionMovies} />
    <Row  title="Romances"
                fetchUrl={requests.fetchRomanceMovies} />
    <Row  title="Comedies"
                fetchUrl={requests.fetchComedyMovies} />
    <Row  title="Documentaires"
                fetchUrl={requests.fetchDocumentaries} />
    <Row  title="Film d'Horreur"
                fetchUrl={requests.fetchHorrorMovies} />
    <Footer />
          
    </div>
  );
}

export default App;
