import React, { useMemo, useState } from "react";
import ItemForm from "../../components/ItemForm/ItemForm";
import LibraryItem from "../../components/LibraryItem/LibraryItem";
import PostFilter from "../../components/PostFilter/PostFilter";
import MyButton from "../../components/UI/button/MyButton/MyButton";
import MyModal from "../../components/UI/MyModal/MyModal";
import "./MediaPage.css";

const MediaPage = ({ items, setItems }) => {
  const createItem = (newItem) => {
    setItems([...items, newItem]);
    setVisible(false);
  };

  const removeItem = (item) => {
    setItems(items.filter((book) => book.id !== item.id));
  };

  const [existedItem, setExistedItem] = useState();

  const editItem = (item) => {
    setExistedItem(item);
    setVisible(true);
    removeItem(item);
  };

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...items].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return items;
  }, [filter.sort, items]);

  const sortedAndSearchedItems = useMemo(() => {
    return sortedPosts.filter((book) =>
      book.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const [visible, setVisible] = useState(false);

  return (
    <div className="mediaPage">
      <div className="CreateItemWrapper">
        <MyButton onClick={() => setVisible(true)}>Create item</MyButton>
      </div>
      <MyModal visible={visible} setVisible={setVisible}>
        <ItemForm
          createItem={createItem}
          existedItem={existedItem}
          removeItem={removeItem}
        />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <div className="mediaCardsWrapper">
        {items.length === 0 ? (
          <h2>Items not found</h2>
        ) : (
          <div className="mediaCards">
            {sortedAndSearchedItems.map((book, index) => (
              <LibraryItem
                book={book}
                index={index}
                key={book.id}
                editItem={editItem}
                removeItem={removeItem}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaPage;
