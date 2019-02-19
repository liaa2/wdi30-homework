import React, { Component } from 'react';
import Square from './Square';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Board extends Component{
  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null), turn: 1,userinPlay: 'X',
    };
    // this.renderSquare.bind(this);
    this.renderSquare = this.renderSquare.bind(this);
    this._beginGame = this._beginGame.bind(this);
    this._switchUser = this._switchUser.bind(this);

  }
  _switchUser(){
    let turn = this.state.turn;
    // alert(turn);
    if(turn % 2 === 0)
      {
        // alert('turn 1');
        this.setState({userinPlay: 'X'});
      }
      else {
        // alert('turn 2');
        this.setState({userinPlay: 'O'});
      }

      // $obj.addClass(`gameinput-${userinPlay}`);
      // $obj.removeClass('tinytictac');
      // alert(this.state.userinPlay);
      // this.setState({value: this.props.value});
      // squares[i] = (this.state.xIsNext) ? 'X': 'O';
  }
  _beginGame(i){
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
        return;
        }
    this._switchUser();

    squares[i] = this.state.userinPlay;
    this.setState({squares: squares});
    // alert("Game " + squares[i]);
    // this.setState({squares[i]: this.state.userinPlay});
    // squares[i] = this.state.userinPlay;
    this.setState({turn: this.state.turn + 1});
    // alert(this.state.turn);

  }
  renderSquare(i) {
   return <Square value={this.state.squares[i]} onClick={()=>this._beginGame(i)}/>
 }
  render(){
    return(
      <div className="tictacgrid">
      <div className="board-row">
        { this.renderSquare(0) }
        { this.renderSquare(1) }
        { this.renderSquare(2) }
      </div>
      <div className="board-row">
        { this.renderSquare(3) }
        { this.renderSquare(4) }
        { this.renderSquare(5) }
      </div>
      <div className="board-row">
        { this.renderSquare(6) }
        { this.renderSquare(7) }
        { this.renderSquare(8) }
      </div>

       </div>
    )

  }
}
export default Board;
