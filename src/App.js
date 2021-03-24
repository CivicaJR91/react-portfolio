
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AboutMe from "./components/pages/AboutMe/AboutMe";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import ContactMe from "./components/pages/ContactMe/ContactMe";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div>
    <Router>
      <div>
        <Navbar />
        <Route exact path ="/" component = {AboutMe} />
        <Route exact path ="/portfolio" component = {Portfolio} />
        <Route exact path ="/ContactMe" component = {ContactMe} />
      </div>
    </Router>
    <di>
    <Footer />
    </di>
    </div>
  );
}

export default App;