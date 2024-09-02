import React from "react";
import Header from "./component/Header/Header";
import Services from "./component/Services/Services";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
