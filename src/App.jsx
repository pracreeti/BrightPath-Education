import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
