import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-particles-js"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      {/* <Particles /> */}
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
      
    </>
  );
}

export default App;
