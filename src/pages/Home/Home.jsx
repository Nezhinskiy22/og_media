import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "../List/List";
import Ebooks from "../MediaPage/MediaPage";
import { useState } from "react";
import Header from "../../components/Header/Header";
import { dataMovies, dataGames, dataBooks } from "../../data/APIdata";

const Home = () => {
  const [movies, setMovies] = useState(dataMovies);
  const [games, setGames] = useState(dataGames);
  const [books, setBooks] = useState(dataBooks);

  const [list, setList] = useState([...movies, ...games, ...books]);

  console.log(list);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<List data={list} />} />
          <Route
            path="movies"
            element={<Ebooks items={movies} setItems={setMovies} />}
          />
          <Route
            path="games"
            element={<Ebooks items={games} setItems={setGames} />}
          />
          <Route
            path="ebooks"
            element={<Ebooks items={books} setItems={setBooks} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
