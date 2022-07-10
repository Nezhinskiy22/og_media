import React from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";
import "./PostFilter.css";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className="postFilter">
      <MyInput
        className="postFilterInput"
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        className="postFilterSelect"
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort by"
        options={[
          {
            value: "title",
            name: "By name",
          },
          {
            value: "id",
            name: "By date",
          },
        ]}
      ></MySelect>
    </div>
  );
};

export default PostFilter;
