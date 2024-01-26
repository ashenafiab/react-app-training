import React, {useState} from "react";

function InputArea(props) {

    const [item, setItem] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setItem(newValue);
      }

    return (
        <div className="form">
        <input onChange={handleChange} name="item" type="text" value={item} />
        <button onClick={() => {
            props.onAdd(item);
            setItem("");
        }}>
            <span>Add</span>
        </button>
        </div>
    );
    }

export default InputArea;
