import React, { Component } from 'react';
import axios from 'axios';

class BookSearch extends Component {
  constructor() {
    super();
    this.state = {
      book: ""
    }
    this.fetchBooks = this.fetchBooks.bind(this);
  }

  fetchBooks(q) {
    console.log('searched for', q);

    axios.get("https://www.googleapis.com/books/v1/volumes?q=title:" + q).then( (info) => {
      const book = info.data.items[0].volumeInfo.imageLinks.thumbnail;
      console.log(book);
      this.setState({ book: book });
    });
  }

  render() {
    return (
      <div>
        <h1>Google Books Search</h1>
        <SearchForm onSubmit={ this.fetchBooks }/>
        <BookShelf book={ this.state.book }/>
      </div>
    );
  }
}

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    }
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput (e) {
    this.setState({
      query: e.target.value
    });
  }

  _handleSubmit (e) {
    e.preventDefault();
    this.props.onSubmit( this.state.query );
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="Jaws" required onInput={ this._handleInput }/>
        <input type="submit" value="Search Books" />
      </form>
    )
  }
}

class BookShelf extends Component {
  render() {
    return (
      <div>
        <Book url={ this.props.book } />
      </div>
    )
  }
}

function Book (props) {
  return (
    <img src={ props.url } />
  )
}

export default BookSearch;
