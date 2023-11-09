import Bishop from '../pieces/bishop.js';
import King from '../pieces/king.js';
import Knight from '../pieces/knight.js';
import Pawn from '../pieces/pawn.js';
import Queen from '../pieces/queen.js';
import Rook from '../pieces/rook.js';

export default function initialiseChessBoard(st) {


  const squares = Array(64).fill(null);

  for (let i = 0; i < st.length; i += 2) {
    if (st[i] === 'K') {
      squares[i / 2] = new King(parseInt(st[i + 1]), "King");
    } else if (st[i] === 'Q') {
      squares[i / 2] = new Queen(parseInt(st[i + 1]), "Queen");
    } else if (st[i] === 'B') {
      squares[i / 2] = new Bishop(parseInt(st[i + 1]), "Bishop");
    } else if (st[i] === 'P') {
      squares[i / 2] = new Pawn(parseInt(st[i + 1]), "Pawn");
    } else if (st[i] === 'R') {
      squares[i / 2] = new Rook(parseInt(st[i + 1]), "Rook");
    } else if (st[i] === 'N') {
      squares[i / 2] = new Knight(parseInt(st[i + 1]), "Knight");
    } else {
      squares[i / 2] = null;
    }
  }

  // const squares = Array(64).fill(null);

  // for (let i = 8; i < 16; i++) {
  //   squares[i] = new Pawn(2, "Pawn");
  //   squares[i + 40] = new Pawn(1, "Pawn");
  // }

  // squares[0] = new Rook(2, "Rook");
  // squares[7] = new Rook(2, "Rook");
  // squares[56] = new Rook(1, "Rook");
  // squares[63] = new Rook(1, "Rook");

  // squares[1] = new Knight(2, "Knight");
  // squares[6] = new Knight(2, "Knight");
  // squares[57] = new Knight(1, "Knight");
  // squares[62] = new Knight(1, "Knight");

  // squares[2] = new Bishop(2, "Bishop");
  // squares[5] = new Bishop(2, "Bishop");
  // squares[58] = new Bishop(1, "Bishop");
  // squares[61] = new Bishop(1, "Bishop");

  // squares[3] = new Queen(2, "Queen");
  // squares[4] = new King(2, "King");

  // squares[59] = new Queen(1, "Queen");
  // squares[60] = new King(1, "King");

  return squares;
}