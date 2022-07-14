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

  const removeItem = (itemToRemove) => {
    setItems(items.filter((item) => item.id !== itemToRemove.id));
  };

  const [existedItem, setExistedItem] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const editItem = (item) => {
    setIsEdit(true);
    setExistedItem(item);
    setVisible(true);
  };

  const addItem = () => {
    setIsEdit(false);
    setExistedItem(null);
    setVisible(true);
  };

  const [filter, setFilter] = useState({ sort: "", query: "" });
  //Sorting with useMemo
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...items].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return items;
  }, [filter.sort, items]);
  //Sorted and searched items
  const sortedAndSearchedItems = useMemo(() => {
    if (filter.query || filter.sort) {
      return sortedPosts.filter((item) =>
        item.title.toLowerCase().includes(filter.query.toLowerCase())
      );
    } else if (filter.query === "") return items;
  }, [filter.query, filter.sort, sortedPosts, items]);

  const [visible, setVisible] = useState(false);

  return (
    <div className="mediaPage">
      <div className="CreateItemWrapper">
        <MyButton onClick={() => addItem()}>Create item</MyButton>
      </div>
      <MyModal visible={visible} setVisible={setVisible}>
        <ItemForm
          createItem={createItem}
          existedItem={existedItem}
          removeItem={removeItem}
          items={items}
          setItems={setItems}
          setVisible={setVisible}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <div className="mediaCardsWrapper">
        {items.length === 0 ? (
          <h2>Items not found</h2>
        ) : (
          <div className="mediaCards">
            {sortedAndSearchedItems.map((item, index) => (
              <LibraryItem
                item={item}
                index={index}
                key={item.id}
                editItem={editItem}
                removeItem={removeItem}
                setExistedItem={setExistedItem}
                sortedAndSearchedItems={sortedAndSearchedItems}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaPage;
