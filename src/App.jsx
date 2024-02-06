import "./App.css";
import { PiecesProvider } from "./assets/Components/Context/PiecesContext";

import { DiceProvider } from "./assets/Context/DiceContext";
import { MoveProvider } from "./assets/Context/MoveContext";
import TrianglesPage from "./assets/Pages/TrianglesPage";

function App() {
  return (
    <>
      <MoveProvider>
        <PiecesProvider>
          <DiceProvider>
            <div className="container">
              <div className="framework">
                <div className="framework-1">
                <TrianglesPage></TrianglesPage>
                </div>
              </div>
            </div>
          </DiceProvider>
        </PiecesProvider>
      </MoveProvider>
    </>
  );
}

export default App;
