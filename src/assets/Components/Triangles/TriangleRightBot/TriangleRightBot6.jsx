import BlackPiece4 from '../../Pieces/BlackPiece/BlackPiece4';
import BlackPiece5 from '../../Pieces/BlackPiece/BlackPiece5';
import BlackPiece6 from '../../Pieces/BlackPiece/BlackPiece6';
import BlackPiece7 from '../../Pieces/BlackPiece/BlackPiece7';
import BlackPiece8 from '../../Pieces/BlackPiece/BlackPiece8';

const TriangleRightBot6 = ({drop,dragOver}) => {

  const handleDrop = (e) => {
    drop(e);
  };
  const handleDragOver = (e) => {
    dragOver(e);
  };

  

  return (
    <div
      id="left-bot-2"
      className="card-area-bot"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
        <BlackPiece4></BlackPiece4>
      <BlackPiece5></BlackPiece5>
      <BlackPiece6></BlackPiece6>
      <BlackPiece7></BlackPiece7>
      <BlackPiece8></BlackPiece8>
    </div>
  );
}

export default TriangleRightBot6