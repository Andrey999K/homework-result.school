import React, {useState} from "react";

const Counter = (props) => {
    const {value} = props;
    const formatValue = () => {
        return value === 0 ? 'empty' : value;
    };

    const getBageClasses = () => {
        return "badge m-2 " + (value === 0 ? "bg-warning" : "bg-primary");
    }

    return (
      <div>
        <span>{props.name}</span>
        <button className="btn btn-primary btn-sm m-2" onClick={() => props.onDecrement(props.id)}>-</button>
        <span className={getBageClasses()}>{formatValue()}</span>
        <button className="btn btn-primary btn-sm m-2" onClick={() => props.onIncrement(props.id)}>+</button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
      </div>
    );
}

export default Counter;