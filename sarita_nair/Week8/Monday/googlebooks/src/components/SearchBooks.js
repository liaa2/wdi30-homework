import React, {Component} from 'react';

class SearchBooks extends Component{
  constructor(){
    super();
    this._handleInput = this._handleInput.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this.state = {bookname: ''}
  }
  _handleClick(e){
    e.preventDefault();
    this.props.onClick(this.state.bookname);
  }
  _handleInput(e){
    // console.log(e.target.value);
    this.setState({bookname: e.target.value});

  }
  render(){
    return(
      <form>
      <input type="text" onInput={this._handleInput}/>
      <input type="submit" value="search" onClick={this._handleClick} />
      </form>
    );
  }
}

export default SearchBooks;
