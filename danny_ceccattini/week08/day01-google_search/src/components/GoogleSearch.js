import React, { Component } from 'react';
import axios from 'axios';

class GoogleSearch extends Component {
  constructor() {
    super();
    this.state = {
      bookTitle: '',
      bookCover: '',
      bookCovers: [],
    };
  this.getABook = this.getABook.bind(this);
  };

  getABook(searchQuery) {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchQuery)
      .then(results => {
        this.setState({
          bookTitle: results.data.items[0].volumeInfo.title,
          bookCover: results.data.items[0].volumeInfo.imageLinks.thumbnail,
          bookCovers: results.data.items.map(item => {
            return item.volumeInfo.imageLinks.thumbnail;
          })
        })
        // console.log(this.state.bookTitle);
        // console.log(this.state.bookCover);
        console.log(this.state.bookCovers);
      })
  }

  render() {
    return (
      <div>
        <h1>Google` Book Search</h1>
        <SearchBook onSubmit={ this.getABook } />
        <BookTitles title={ this.state.bookTitle } />
        <BookCover image={ this.state.bookCover } />
        <BookShelf images={ this.state.bookCovers } />
      </div>
    );
  }
}

class SearchBook extends Component {
  constructor() {
    super();
    this.state = { query: '' };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(e) {
    this.setState({ query: e.target.value });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    // The below is equivalent to.
    // GoogleSearch's getaBook("das kapital").
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="Book title" required onInput={ this._handleInput } />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

class BookTitles extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
      </div>
    );
  }
}

class BookCover extends Component {
  render() {
    return(
      <div>
        <img src={ this.props.image } />
      </div>
    )
  }
}

class BookShelf extends Component {
  render() {
    return(
      <div>
        { this.props.images.map( (url) => <Image url={url} />) }
      </div>
    )
  }
}


function Image (props) {
  return (
    <img src={ props.url } />
  )
}


export default GoogleSearch
