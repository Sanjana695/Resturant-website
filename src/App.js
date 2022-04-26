import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Products from "./Components/Products";


function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Header />
        <div className="container">
        <Routes>
           <Route exact path="/" element={<Home />} />
         <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
          </div>
      </Router>
    </>
  
      
    </div>
  );
}

export default App;




