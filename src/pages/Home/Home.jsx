import React, { useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "../List/List";
import Ebooks from "../E-books/E-books";
import Movies from "../Movies/Movies";
import Games from "../Games/Games";
import { useState } from "react";
import Header from "../../components/Header/Header";
import ItemForm from "../../components/ItemForm/ItemForm";
import MyModal from "../../components/UI/MyModal/MyModal";
import MyButton from "../../components/UI/button/MyButton/MyButton";
import { dataMovies, dataGames, dataBooks } from "../../data/APIdata";

const Home = () => {
  const [movies, setMovies] = useState(dataMovies);
  const [games, setGames] = useState(dataGames);
  const [books, setBooks] = useState(dataBooks);

  const createItem = (newItem) => {
    setBooks([...books, newItem]);
    setVisible(false);
  };

  const removeItem = (item) => {
    setBooks(books.filter((book) => book.id !== item));
  };

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...books].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return books;
  }, [filter.sort, books]);

  const sortedAndSearchedBooks = useMemo(() => {
    return sortedPosts.filter((book) =>
      book.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <MyButton onClick={() => setVisible(true)}>Create item</MyButton>
        <MyModal visible={visible} setVisible={setVisible}>
          <ItemForm createItem={createItem} />
        </MyModal>
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="movies" element={<Movies />} />
          <Route path="games" element={<Games />} />
          <Route
            path="ebooks"
            element={
              <Ebooks
                data={sortedAndSearchedBooks}
                removeItem={removeItem}
                filter={filter}
                setFilter={setFilter}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
