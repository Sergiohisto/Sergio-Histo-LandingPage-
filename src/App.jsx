import About from "./components/About";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
//import  Services from "./components/Services";
import Work from './components/Work';
import Contact from './components/Contact';
//import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
     <Banner />
     <Nav />
     <About />
     <Work />
     <Contact />
    
  
    </div>
  );
};

export default App;
