import Navbar from "./Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
const App = () => {
  return ( 
    <>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/pricing"  element={<Pricing/>} />
        <Route path="/contact"  element={<Contact/>} />
        <Route path="/blog"  element={<Blog/>} />
        <Route />
      </Routes>
    </div>
    </>
   );
}
 
export default App;