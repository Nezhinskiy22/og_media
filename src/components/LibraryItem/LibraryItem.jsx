import React from "react";
import MyButton from "../UI/button/MyButton/MyButton";

const LibraryItem = ({ book, index, editItem, removeItem }) => {
  return (
    <div className="libraryItem">
      <p>
        {index + 1}. {book.title}
      </p>
      <img src={book.link} alt="" style={{ width: "200px" }} />
      <p>{book.desc}</p>
      <MyButton onClick={() => editItem(book)}>Edit</MyButton>
      <MyButton onClick={() => removeItem(book)}>Delete</MyButton>
    </div>
  );
};

export default LibraryItem;
