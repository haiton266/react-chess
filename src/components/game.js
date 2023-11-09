import React, { useState, useEffect } from 'react';
import '../index.scss';
import Board from './board.js';
import King from '../pieces/king';
import FallenSoldierBlock from './fallen-soldier-block.js';
import initialiseChessBoard from '../helpers/board-initialiser.js';
import { FetchById, PutUpdate } from '../Services/chessBoardServices.js';
import Countdown from './Countdown.js';
import ModalJoinWinner from './ModalJoinWinner';
// import io from 'socket.io-client';

// const socket = io('http://localhost:5000');


export default function Game() {
  const [listChess, setListChess] = useState({});
  const [squares, setSquares] = useState([]);
  const [whiteFallenSoldiers, setWhiteFallenSoldiers] = useState([]);
  const [blackFallenSoldiers, setBlackFallenSoldiers] = useState([]);
  const [player, setPlayer] = useState(1);
  const [sourceSelection, setSourceSelection] = useState(-1);
  const [status, setStatus] = useState('');
  const [turn, setTurn] = useState('white');
  const [isReset, setIsReset] = useState(true);
  const [isShowModalWinner, setIsShowModalWinner] = React.useState(false);
  const [dataWinner, setDataWinner] = React.useState("");
  const handleClose = () => {
    setIsShowModalWinner(false);
  }
  const getChess = async () => {
    try {
      let res = await FetchById(localStorage.getItem("idRoom"));
      if (res && res.data) {
        setPlayer(res.data.turn);
        setListChess(res.data);
        setSquares(initialiseChessBoard(res.data.chessBoard));
        // console.log("winner: ", res.data.winner);
        if (res.data.winner !== "0") {
          setIsShowModalWinner(true);
          setDataWinner(res.data.winner);
        }
      }
      setIsReset(true);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getChess();
  }, []);

  const getNewChess = async () => {
    try {
      let res = await FetchById(localStorage.getItem("idRoom"));
      if (res && res.data) {
        if (res.data.chessBoard !== listChess.chessBoard) {
          getChess();
        }
      }
    } catch (error) {
      console.error("Error fetching data 2: ", error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(getNewChess, 100);
    return () => clearInterval(intervalId);
  }, [listChess]);


  const updateChess = async (x, player, winner) => {
    try {
      let res = await PutUpdate(localStorage.getItem("idRoom"), x, player, "no", "no", "no", winner);
    } catch (error) {
      console.error("Error update data: ", error);
    }
  }

  const handleClick = (i) => {
    let updatedSquares = [...squares];

    const pp = localStorage.getItem("p");
    if (String(player) !== pp) {
      setStatus("It's another player turn. Please wait...");
      return;
    }

    if (sourceSelection === -1) {
      if (!updatedSquares[i] || updatedSquares[i].player !== player) {
        setStatus("Wrong selection. Choose player " + player + " pieces.");
        if (updatedSquares[i]) {
          updatedSquares[i].style = { ...updatedSquares[i].style, backgroundColor: "" };
        }
      } else {
        updatedSquares[i].style = { ...updatedSquares[i].style, backgroundColor: "RGB(111,143,114)" };
        setSourceSelection(i);
        setStatus("Choose destination for the selected piece");
      }
      setSquares(updatedSquares);
      return;
    }

    updatedSquares[sourceSelection].style = { ...updatedSquares[sourceSelection].style, backgroundColor: "" };

    if (updatedSquares[i] && updatedSquares[i].player === player) {
      setStatus("[1] Wrong selection. Di sai nuoc.");
      setSourceSelection(-1);
    } else {
      const updatedWhiteFallenSoldiers = [...whiteFallenSoldiers];
      const updatedBlackFallenSoldiers = [...blackFallenSoldiers];
      const isDestEnemyOccupied = Boolean(updatedSquares[i]);
      const isMovePossible = updatedSquares[sourceSelection].isMovePossible(sourceSelection, i, isDestEnemyOccupied);

      if (isMovePossible) {
        if (updatedSquares[i] !== null) {
          if (updatedSquares[i].player === 1) {
            updatedWhiteFallenSoldiers.push(updatedSquares[i]);
          } else {
            updatedBlackFallenSoldiers.push(updatedSquares[i]);
          }
        }

        updatedSquares[i] = updatedSquares[sourceSelection];
        updatedSquares[sourceSelection] = null;

        var playersKingPosition = getKingPosition(updatedSquares, player);
        var competitorKingPosition = getKingPosition(updatedSquares, player === 1 ? 2 : 1);

        const canPieceKillPlayersKing = (piece, i) => piece.isMovePossible(playersKingPosition, i, updatedSquares);
        const opponent = player === 1 ? 2 : 1;
        const isCheckMe = updatedSquares.reduce((acc, curr, idx) =>
          acc ||
          (curr &&
            (curr.getPlayer() === opponent) &&
            canPieceKillPlayersKing(curr, idx)
            && true),
          false);

        if (isCheckMe) {
          console.log("Chiếu tướng");
        }

        let newPlayer = player === 1 ? 2 : 1;
        let newTurn = turn === 'white' ? 'black' : 'white';

        setSquares(updatedSquares);
        setWhiteFallenSoldiers(updatedWhiteFallenSoldiers);
        setBlackFallenSoldiers(updatedBlackFallenSoldiers);
        setPlayer(newPlayer);
        setStatus('');
        setTurn(newTurn);
        setSourceSelection(-1);


      } else {
        setStatus("[3] Wrong selection. Choose valid source and destination again.");
        setSourceSelection(-1);
      }
    }

    var x = "";
    for (let i = 0; i < 64; i++) {
      if (updatedSquares[i] === null) x += "00";
      else if (updatedSquares[i].namePeace === "Knight") x += "N" + updatedSquares[i].player;
      else x += updatedSquares[i].namePeace[0] + updatedSquares[i].player;
    }
    if (competitorKingPosition === false)
      updateChess(x, player === 1 ? 2 : 1, String(player));
    else
      updateChess(x, player === 1 ? 2 : 1, "0");
    // Nạp thêm 1 biến nữa là ai win: 0 đang chơi, 1 là player 1, 2 là player 2
  }

  const getKingPosition = (squares, player) => {
    return squares.reduce((acc, curr, idx) =>
      acc ||
      (curr &&
        (curr.getPlayer() === player) &&
        (curr instanceof King)
        && idx),
      null);
  }

  return (
    <div>
      <div className="game">
        <div className="game-board">
          <Board
            squares={squares}
            onClick={(i) => handleClick(i)}
          />
        </div>
        <div className="game-info">
          <h3>Turn</h3>
          <div id="player-turn-box" style={{ backgroundColor: turn }}></div>
          <div className="game-status">{status}</div>
          <div className="fallen-soldier-block">
            {<FallenSoldierBlock
              whiteFallenSoldiers={whiteFallenSoldiers}
              blackFallenSoldiers={blackFallenSoldiers}
            />}
          </div>
        </div>
      </div>
      <Countdown
        reset={isReset}
        setReset={setIsReset}
      />
      <ModalJoinWinner
        show={isShowModalWinner} // cái có thể lấy ra từ prop
        handleClose={handleClose}
        dataWinner={dataWinner}
      />
    </div>
  );
}
