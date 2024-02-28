import { useContext } from "react";
import "./App.css";
import TrianglesPage from "./assets/Pages/TrianglesPage";
import { MoveContext } from "./assets/Context/MoveContext";

function App() {
  const { piece,wrongMove, moveCount, setWrongMove, setPlayedWrong, setMoveCount } =
  useContext(MoveContext);
  
  const handleDrop = (e) => {
    e.stopPropagation(); // Yayılma durduruluyor
        setWrongMove(true);
  };

  const handleDragOver = (e) => {
    e.stopPropagation(); // Yayılma durduruluyor
    e.preventDefault();

    if (e.target.classList.contains("container")) {
      e.preventDefault();
      e.target.classList.add("drag-over");
    }
  };

  return (
    <>
      <div
        className="container"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="framework">
          <div className="framework-1">
            <TrianglesPage></TrianglesPage>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
