import React from "react";

function Box({
  id,
  width = 5,
  height = 5,
  handleRemove,
  backgroundColor = "blue",
}) {
  const remove = () => handleRemove(id);
  return (
    <>
      <div
        style={{
          height: `${width}em`,
          widht: `${height}em`,
          backgroundColor,
        }}
      >
        <button onClick={remove}> Remove!</button>
      </div>
    </>
  );
}

export default Box;
