import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
// import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Navbar } from "./pages/Navbar";
import { Error } from "./pages/Error";
import { Footer } from "./pages/Footer"; 


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
