import React, { useEffect, useState } from "react";
import MyButton from "../../components/UI/button/MyButton/MyButton";
import MyInput from "../../components/UI/input/MyInput";
import { useToast } from "@chakra-ui/react";

const ItemForm = ({ createItem, existedItem, removeItem }) => {
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
    const newItem = {
      ...existedItem,
      id: existedItem.id,
    };
    setLibraryItem({
      id: newItem.id,
      title: newItem.title,
      link: newItem.link,
      desc: newItem.desc,
    });
    createItem(libraryItem);
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
        placeholder="Image"
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
