import React, { useState } from "react";
import {IState as props} from "../App"

interface IProps {
    people: props["people"]
    setPeople: React.Dispatch<React.SetStateAction<props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    note: "",
    id:"",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = () :void => {
    if ( !input.name || !input.age || !input.img) {
        return
    }
    setPeople([...people, {
        id:parseInt(input.id),
        name:input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
    }])
    setInput({
    id:"",
    name: "",
    age: "",
    img: "",
    note: "",
    })
  }
  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        name="img"
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        name="note"
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>Add to List</button>
    </div>
  );
};

export default AddToList;
