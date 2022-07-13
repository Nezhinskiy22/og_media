import React, { useEffect, useState } from "react";
import MyButton from "../../components/UI/button/MyButton/MyButton";
import MyInput from "../../components/UI/input/MyInput";
import { useToast } from "@chakra-ui/react";

const ItemForm = ({ createItem, existedItem, setVisible, items, setItems }) => {
  const [libraryItem, setLibraryItem] = useState({
    title: "",
    link: "",
    desc: "",
  });

  useEffect(() => {
    if (existedItem) setLibraryItem(existedItem);
  }, [existedItem]);

  const addNewItem = (e) => {
    e.preventDefault();
    const newItem = {
      ...libraryItem,
      id: Date.now().toString(),
    };
    console.log(newItem);
    createItem(newItem);
    setLibraryItem({ title: "", link: "", desc: "" });
    toast({
      title: "Item created.",
      description: "We've created your item for you.",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const editExistedItem = (e) => {
    e.preventDefault();
    setLibraryItem({
      id: existedItem.id,
      title: existedItem.title,
      link: existedItem.link,
      desc: existedItem.desc,
    });

    let index = items.findIndex((elem) => elem === existedItem);
    items.splice(index, 1);
    items.push(libraryItem);
    console.log(libraryItem);
    setItems(items);
    console.log(1, items);
    setLibraryItem({
      id: "",
      title: "",
      link: "",
      desc: "",
    });

    toast({
      title: "Item updated.",
      description: "We've updated your item for you.",
      status: "info",
      duration: 1000,
      isClosable: true,
    });
    setVisible(false);
  };

  const toast = useToast();

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Name"
        value={libraryItem.title}
        onChange={(e) =>
          setLibraryItem({ ...libraryItem, title: e.target.value })
        }
      />
      <MyInput
        type="text"
        placeholder="Description"
        value={libraryItem.desc}
        onChange={(e) =>
          setLibraryItem({ ...libraryItem, desc: e.target.value })
        }
      />
      <MyInput
        type="text"
        placeholder="Enter URL of your image"
        value={libraryItem.link}
        onChange={(e) =>
          setLibraryItem({ ...libraryItem, link: e.target.value })
        }
      />
      {existedItem ? (
        <MyButton onClick={editExistedItem}>Edit</MyButton>
      ) : (
        <MyButton onClick={addNewItem}>Add</MyButton>
      )}
    </form>
  );
};

export default ItemForm;
