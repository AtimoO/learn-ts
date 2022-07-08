import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("drag");
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
    console.log("drop");
  };
  const leaveDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
  };
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(true);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Неуправляемый" />
      <input
        value={value}
        onChange={changeHandle}
        type="text"
        placeholder="Управляемый"
      />
      <button onClick={clickHandle}>Btn</button>

      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: "red", margin: 10 }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveDrag}
        onDragOver={dragOverHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "green" : "red",
          margin: 10,
        }}
      ></div>
    </div>
  );
};
export default EventsExample;
