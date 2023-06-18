import "./App.css";
import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer></Footer>
      </>
    </BrowserRouter>
  );
}

export default App;
