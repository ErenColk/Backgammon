import "./App.css";
import { PiecesProvider } from "./assets/Components/Context/PiecesContext";
import Dice from "./assets/Components/Dices/Dice";
import TriangleLeftBot1 from "./assets/Components/Triangles/TriangleLeftBot/TriangleLeftBot1";
import TriangleLeftBot2 from "./assets/Components/Triangles/TriangleLeftBot/TriangleLeftBot2";
import TriangleLeftBot3 from "./assets/Components/Triangles/TriangleLeftBot/TriangleLeftBot3";
import TriangleLeftBot4 from "./assets/Components/Triangles/TriangleLeftBot/TriangleLeftBot4";
import TriangleLeftBot5 from "./assets/Components/Triangles/TriangleLeftBot/TriangleLeftBot5";
import TriangleLeftBot6 from "./assets/Components/Triangles/TriangleLeftBot/TriangleLeftBot6";

import TraingleLeftTop1 from "./assets/Components/Triangles/TriangleLeftTop/TraingleLeftTop1";
import TraingleLeftTop2 from "./assets/Components/Triangles/TriangleLeftTop/TraingleLeftTop2";
import TraingleLeftTop3 from "./assets/Components/Triangles/TriangleLeftTop/TraingleLeftTop3";
import TraingleLeftTop4 from "./assets/Components/Triangles/TriangleLeftTop/TraingleLeftTop4";
import TraingleLeftTop5 from "./assets/Components/Triangles/TriangleLeftTop/TraingleLeftTop5";
import TraingleLeftTop6 from "./assets/Components/Triangles/TriangleLeftTop/TraingleLeftTop6";

import TriangleRightBot1 from "./assets/Components/Triangles/TriangleRightBot/TriangleRightBot1";
import TriangleRightBot2 from "./assets/Components/Triangles/TriangleRightBot/TriangleRightBot2";
import TriangleRightBot3 from "./assets/Components/Triangles/TriangleRightBot/TriangleRightBot3";
import TriangleRightBot4 from "./assets/Components/Triangles/TriangleRightBot/TriangleRightBot4";
import TriangleRightBot5 from "./assets/Components/Triangles/TriangleRightBot/TriangleRightBot5";
import TriangleRightBot6 from "./assets/Components/Triangles/TriangleRightBot/TriangleRightBot6";

import TriangleRightTop1 from "./assets/Components/Triangles/TriangleRightTop/TriangleRightTop1";
import TriangleRightTop2 from "./assets/Components/Triangles/TriangleRightTop/TriangleRightTop2";
import TriangleRightTop3 from "./assets/Components/Triangles/TriangleRightTop/TriangleRightTop3";
import TriangleRightTop4 from "./assets/Components/Triangles/TriangleRightTop/TriangleRightTop4";
import TriangleRightTop5 from "./assets/Components/Triangles/TriangleRightTop/TriangleRightTop5";
import TriangleRightTop6 from "./assets/Components/Triangles/TriangleRightTop/TriangleRightTop6";
import { DiceProvider } from "./assets/Context/DiceContext";

function App() {
  return (
    <>
      <PiecesProvider>
        <DiceProvider>
          <div className="container">
            <div className="framework">
              <div className="framework-1">
                <div className="area-left">
                  <div className="area-left-top">
                    <div className="triangle-top-white">
                      <TraingleLeftTop1></TraingleLeftTop1>
                    </div>
                    <div className="triangle-top-dark">
                      <TraingleLeftTop2></TraingleLeftTop2>
                    </div>
                    <div className="triangle-top-white">
                      <TraingleLeftTop3></TraingleLeftTop3>
                    </div>
                    <div className="triangle-top-dark">
                      <TraingleLeftTop4></TraingleLeftTop4>
                    </div>
                    <div className="triangle-top-white">
                      <TraingleLeftTop5></TraingleLeftTop5>
                    </div>
                    <div className="triangle-top-dark">
                      <TraingleLeftTop6></TraingleLeftTop6>
                    </div>
                  </div>
                  <div className="area-left-bottom">
                    <div className="triangle-bottom-white">
                      <TriangleLeftBot1></TriangleLeftBot1>
                    </div>
                    <div className="triangle-bottom-dark">
                      <TriangleLeftBot2></TriangleLeftBot2>
                    </div>
                    <div className="triangle-bottom-white">
                      <TriangleLeftBot3></TriangleLeftBot3>
                    </div>
                    <div className="triangle-bottom-dark">
                      <TriangleLeftBot4></TriangleLeftBot4>
                    </div>
                    <div className="triangle-bottom-white">
                      <TriangleLeftBot5></TriangleLeftBot5>
                    </div>
                    <div className="triangle-bottom-dark">
                      <TriangleLeftBot6></TriangleLeftBot6>
                    </div>
                  </div>
                </div>
                <div className="area-mid">
               
                  <Dice></Dice>
                </div>

                <div className="area-right">
                  <div className="area-right-top">
                    <div className="triangle-top-dark">
                      <TriangleRightTop1></TriangleRightTop1>
                    </div>
                    <div className="triangle-top-white">
                      <TriangleRightTop2></TriangleRightTop2>
                    </div>
                    <div className="triangle-top-dark">
                      <TriangleRightTop3></TriangleRightTop3>
                    </div>
                    <div className="triangle-top-white">
                      <TriangleRightTop4></TriangleRightTop4>
                    </div>
                    <div className="triangle-top-dark">
                      <TriangleRightTop5></TriangleRightTop5>
                    </div>
                    <div className="triangle-top-white">
                      <TriangleRightTop6></TriangleRightTop6>
                    </div>
                  </div>

                  <div className="area-right-bottom">
                    <div className="triangle-bottom-white">
                      <TriangleRightBot6></TriangleRightBot6>
                    </div>
                    <div className="triangle-bottom-dark">
                      <TriangleRightBot5></TriangleRightBot5>
                    </div>
                    <div className="triangle-bottom-white">
                      <TriangleRightBot4></TriangleRightBot4>
                    </div>
                    <div className="triangle-bottom-dark">
                      <TriangleRightBot3></TriangleRightBot3>
                    </div>
                    <div className="triangle-bottom-white">
                      <TriangleRightBot2></TriangleRightBot2>
                    </div>
                    <div className="triangle-bottom-dark">
                      <TriangleRightBot1></TriangleRightBot1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DiceProvider>
      </PiecesProvider>
    </>
  );
}

export default App;
