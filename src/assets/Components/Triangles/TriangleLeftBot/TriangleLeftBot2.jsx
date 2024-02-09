
const TriangleLeftBot2 = ({drop,dragOver}) => {

  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  return (
    <div
    id="11"
    className="card-area-bot"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    ></div>
  );
};

export default TriangleLeftBot2;
