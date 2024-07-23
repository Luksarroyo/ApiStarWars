import "./App.css";
import FilmDetailContainer from "./Component/FilmDetail/FilmDetailContainer";
import HomeContainer from "./Component/Home/HomeContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/FilmDetail/:id" element={<FilmDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
