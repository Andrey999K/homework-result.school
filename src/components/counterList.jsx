import React, { useState } from 'react';
import Counter from "./counter";

const CounterList = () => {

  const initialState = [
    {id: 0, value: 0, name: "Ненужная вещь"},
    {id: 1, value: 0, name: "Ложка"},
    {id: 2, value: 0, name: "Вилка"},
    {id: 3, value: 0, name: "Тарелка"},
    {id: 4, value: 0, name: "Набор минималиста"}
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters(counters.filter(item => item.id !== id));
  }

  const handleIncrement = (id) => {
    const updatedCounters = counters.map(counter => {
      if (counter.id === id) return {...counter, value: counter.value + 1}
      else return counter;
    });
    setCounters(updatedCounters);
  };

  const handleDecrement = (id) => {
    const updatedCounters = counters.map(counter => {
      if (counter.id === id) return {...counter, value: counter.value - 1}
      else return counter;
    });
    setCounters(updatedCounters);
  };

  return (
    <>
      {counters.map(count =>
        <Counter
          key={count.id}
          onDelete={handleDelete}
          {...count}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      )}
      <button className="btn btn-primary btn-sm m-2">Сброс</button>
    </>
  );
};

export default CounterList;