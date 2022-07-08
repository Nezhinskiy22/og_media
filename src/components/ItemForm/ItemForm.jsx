import React, { useState } from "react";
import MyButton from "../../components/UI/button/MyButton/MyButton";
import MyInput from "../../components/UI/input/MyInput";
import { useToast } from "@chakra-ui/react";

const ItemForm = ({ createItem, removeItem }) => {
  const [libraryItem, setLibraryItem] = useState({
    title: "",
    link: "",
    desc: "",
  });

  const addNewItem = (e) => {
    e.preventDefault();
    const newItem = {
      ...libraryItem,
      id: Date.now().toString(),
    };
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
      <MyButton onClick={addNewItem}>Add</MyButton>
    </form>
  );
};

export default ItemForm;
