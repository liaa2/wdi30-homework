import React, { Component } from 'react';

// let turn = React.createContext(1);

class Square extends Component {
  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this);
    // this._switchUser = this._switchUser.bind(this);
    // this.setturn = this.setturn.bind(this);
    // let turn = 1;
    // this.state = {
    //   value: null,userinPlay: null, userinPlay: null, turn: 1
    // };
  }
  // setturn() {
  //   this.setState({
  //       turn: this.state.turn + 1
  //   });
  // }
  // _switchUser(){
    // let turn = this.state.turn;
    // // alert(turn % 2);
    // if(turn % 2 === 0)
    //   {
    //     alert('turn 1');
    //     this.setState({userinPlay: 'X'});
    //   }
    //   else {
    //     alert('turn 2');
    //     this.setState({userinPlay: 'O'});
    //   }
    //   alert(this.state.userinPlay);
        // this.setState({value: this.props.value});

  // }
  // _beginGame(){
  //   // alert(this.props.value);
  //   this._switchUser();
  //
  //   // this.setState({value: this.state.userinPlay});
  //   // alert(this.state.value);
  //   // this.setState({turn: this.state.turn + 1});
  //   this.setturn();
  //   // turn++;
  //   // alert(this.state.turn);
  // }
  _handleClick(e){
    // console.log('div clicked');
    console.log(e);
    e.preventDefault();
    this.props.onClick(e);
  }
  render(){
    return(
      <div className="tinytictac tinytictacdiv" onClick={this._handleClick}>{this.props.value}
      </div>
      // <button className="tinytictac tinytictacdiv" onClick={() => this.props.onClick()}>{this.props.value} </button>
    );
  }
}
export default Square;
