import React from "react";
import List from "../List/List";
import Ebooks from "../E-books/E-books";
import Movies from "../Movies/Movies";
import Games from "../Games/Games";

const Home = () => {
  return (
    <div>
      Home
      <List />
      <Movies />
      <Games />
      <Ebooks />
    </div>
  );
};

export default Home;
