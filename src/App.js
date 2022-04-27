import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (<>

  {/* <Header/>
  <Homepage/>
  <About/> */}
  <Router>
        <Header />
        <div className="container">
        <Routes>
           <Route exact path="/" element={<Homepage />} />
         <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
        </Routes>
          </div>
      </Router>
      <Footer/>
  </>);
}

export default App;
