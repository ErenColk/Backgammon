import React, { useContext, useEffect, useState } from "react";
import "./Dice.css";
import { DiceContext } from "../../Context/DiceContext";
import { MoveContext } from "../../Context/MoveContext";

const Dice = () => {
  const {
    dice1,
    dice2,
    setDice1,
    setDice2,
    firstGame,
    setFirstGame,
    blackThrew,
    whiteThrew,
    setBlackThrew,
    setWhiteThrew,
  } = useContext(DiceContext);

  
  const { isClickable, setIsClickable,stop,setStop } = useContext(MoveContext);

  const [dice1Points, setDice1Points] = useState();
  const [dice2Points, setDice2Points] = useState();
  const [whoWillStart, setWhoWillStart] = useState(null);

  const rollTheDice = () => {
    const dice1Value = Math.floor(Math.random() * 6) + 1;
    const dice2Value = Math.floor(Math.random() * 6) + 1;

    setIsClickable(false);
    setStop(false);


    pushPoint(dice1Value, dice2Value);
    // setDice1(dice1Value);
    setDice1(1);
    // setDice2(dice2Value);
    setDice2(1);
  };

  useEffect(() => {
    if (whoWillStart === true && dice1 !== undefined && dice2 !== undefined) {
      let message;
      if (dice1 > dice2) {
        message = "OYUNA SİYAH BAŞLAYACAK!";
        setTimeout(() => {
          setFirstGame(false);
          pushPoint(0);
          setBlackThrew(false);
          setWhiteThrew(true);
        }, 1000);
      } else if (dice1 < dice2) {
        message = "OYUNA BEYAZ BAŞLAYACAK!";
        setTimeout(() => {
          setFirstGame(false);
          pushPoint(0);
          setBlackThrew(true);
          setWhiteThrew(false);
        }, 1000);
      } else {
        message = "BERABERE TEKRAR ZAR AT!";
        setTimeout(() => {
          pushPoint(0);
          setBlackThrew(false);
          setWhiteThrew(false);
          setWhoWillStart(false);
        }, 1000);
      }

      setTimeout(() => {
        alert(message + "\nSiyah Zar : " + dice1 + "\nBeyaz Zar : " + dice2);
      }, 800);
    }
  }, [whoWillStart]);

  const selectPlayer = () => {
    if (!blackThrew) {
      const dice1Value = Math.floor(Math.random() * 6) + 1;
      pushPoint(dice1Value);
      setBlackThrew(true);
      setDice1(dice1Value);
    } else if (!whiteThrew) {
      const dice2Value = Math.floor(Math.random() * 6) + 1;
      setWhiteThrew(true);
      pushPoint(dice2Value);
      setDice2(dice2Value);
      setWhoWillStart(true);
    }
  };

  const pushPoint = (dice1, dice2) => {
    const points1 = [];
    for (let i = 0; i < dice1; i++) {
      points1.push(
        <div key={i} className="point">
          .
        </div>
      );
    }

    const points2 = [];
    for (let i = 0; i < dice2; i++) {
      points2.push(
        <div key={i} className="point">
          .
        </div>
      );
    }

    setDice1Points(points1);
    setDice2Points(points2);
  };

  return (
    <>
      {firstGame ? (
        <>
          <div className="dice-1">{dice1Points}</div>
          <input
            id="select-player"
            className={`btn-dice-${!blackThrew ? "dark" : "white"}`}
            type="button"
            value={"Zar At"}
            onClick={selectPlayer}
          />
          <span
            style={{
              fontSize: "13px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              color: !blackThrew ? "black" : "white",
            }}
          >
            <h6> {!blackThrew ? "Siyah Oyuncu" : "Beyaz Oyuncu"}</h6>
          </span>
        </>
      ) : (
        <>
          <div className="dice-1">{dice1Points}</div>
          <div className="dice-2">{dice2Points}</div>
          <input
            className={`btn-dice-${!blackThrew ? "dark" : "white"}`}
            type="button"
            value={"Zar At"}
            onClick={rollTheDice}
            disabled={!isClickable}
          />
        </>
      )}
    </>
  );
};

export default Dice;
