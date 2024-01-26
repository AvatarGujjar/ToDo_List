import React from "react";


const ToDoLists = (props) => {

    return (
        <>
          <div className="todo_style">
            <button className="btn-2" onClick={() => {
                props.onSelect(props.id)
            }}>❌</button>
            <li>{props.text}</li>
          </div>
        
        </>
    )
};

export default ToDoLists;