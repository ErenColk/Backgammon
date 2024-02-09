import React from 'react'

const TriangleRightBot5 = ({drop,dragOver}) => {

  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  

  return (
    <div
    id="5"
    className="card-area-bot"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
    </div>
  );
}

export default TriangleRightBot5