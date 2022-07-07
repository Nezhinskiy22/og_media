import React, { useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "../List/List";
import Ebooks from "../E-books/E-books";
import Movies from "../Movies/Movies";
import Games from "../Games/Games";
import { useState } from "react";
import Header from "../../components/Header/Header";
import ItemForm from "../../components/ItemForm/ItemForm";

const Home = () => {
  const [books, setBooks] = useState([
    {
      id: "1657209452498",
      title: "Interesting book 7",
      link: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJ1LyPm7oH7HD4VXbbaImxSnIJSH7rrpHloPwUDglfmBueMc2D",
      desc: "lorem iplum",
    },
    {
      id: "1657209452598",
      title: "Interesting book 2",
      link: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJ1LyPm7oH7HD4VXbbaImxSnIJSH7rrpHloPwUDglfmBueMc2D",
      desc: "lorem iplum",
    },
    {
      id: "1657209452698",
      title: "Interesting book 3",
      link: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJ1LyPm7oH7HD4VXbbaImxSnIJSH7rrpHloPwUDglfmBueMc2D",
      desc: "lorem iplum",
    },
    {
      id: "16572094524798",
      title: "Interesting book 4",
      link: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJ1LyPm7oH7HD4VXbbaImxSnIJSH7rrpHloPwUDglfmBueMc2D",
      desc: "lorem iplum",
    },
  ]);

  const createItem = (newItem) => {
    setBooks([...books, newItem]);
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

  return (
    <div>
      <BrowserRouter>
        <Header />
        <ItemForm createItem={createItem} />
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
