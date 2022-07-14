import React from "react";
import MyButton from "../UI/button/MyButton/MyButton";
import "./LibraryItem.css";

const LibraryItem = ({ item, index, editItem, removeItem }) => {
  return (
    <div className="libraryItem">
      <p className="itemTitle">
        {index + 1}. {item.title}
      </p>
      <img className="itemImage" src={item.link} alt={item.title} />
      <p className="itemDescription">
        {item.desc.length > 100
          ? item.desc.substring(0, 100) + "..."
          : item.desc}
      </p>
      <div className="itemButtons">
        <MyButton onClick={() => editItem(item)}>Edit</MyButton>
        <MyButton onClick={() => removeItem(item)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default LibraryItem;
