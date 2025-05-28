import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogsPage from "./pages/Blogs";
import ServicesPage from "./pages/Services";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
