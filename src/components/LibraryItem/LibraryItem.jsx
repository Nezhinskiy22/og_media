import React from "react";
import MyButton from "../UI/button/MyButton/MyButton";
import "./LibraryItem.css";

const LibraryItem = ({ book, index, editItem, removeItem }) => {
  return (
    <div className="libraryItem">
      <p className="itemTitle">
        {index + 1}. {book.title}
      </p>
      <img className="itemImage" src={book.link} alt={book.title} />
      <p className="itemDescription">{book.desc.substring(0, 100)}...</p>
      <div className="itemButtons">
        <MyButton onClick={() => editItem(book)}>Edit</MyButton>
        <MyButton onClick={() => removeItem(book)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default LibraryItem;
