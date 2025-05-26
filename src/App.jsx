import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
