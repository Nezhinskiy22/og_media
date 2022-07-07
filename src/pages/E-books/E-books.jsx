import React from "react";
import LibraryItem from "../../components/LibraryItem/LibraryItem";
import PostFilter from "../../components/PostFilter/PostFilter";
import "./E-books.css";

const EBooks = ({ data, removeItem, filter, setFilter }) => {
  return (
    <div className="ebooks">
      <PostFilter filter={filter} setFilter={setFilter} />
      {data.length === 0 ? (
        <h2>Items not found</h2>
      ) : (
        <div className="ebooks-cards">
          {data.map((book, index) => (
            <LibraryItem
              book={book}
              index={index}
              key={book.id}
              removeItem={removeItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EBooks;
