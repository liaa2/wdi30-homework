import React, { Component } from 'react';
import axios from 'axios';
import './master.css';

class GoogleBookSearch extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
    this.fetchResult = this.fetchResult.bind(this);
  }

  fetchResult(q) {
    console.log('Searching for:', q);

    const url = `https://www.googleapis.com/books/v1/volumes?q=${ q }`

    axios.get(url).then(json => {
      console.log("JSON:", json.data);

      let books = [];

      json.data.items.map( (book) => {
        book = {
          title: book.volumeInfo.title,
          thumbnail: book.volumeInfo.imageLinks.thumbnail,
          author: book.volumeInfo.authors,
          date: book.volumeInfo.publishedDate,
          pageCount: book.volumeInfo.pageCount,
          reviewCount: book.volumeInfo.ratingsCount,
          rating: book.volumeInfo.averageRating,
          summary: book.volumeInfo.description,
          bookLink: book.volumeInfo.previewLink
        }
        books.push(book);
      })

      console.log("Books:", books);
      this.setState({ books });
    });

  }

  render() {
    return (
      <div>
        <BookSearchForm onSubmit={ this.fetchResult }/>
        <BookSearchResult books={ this.state.books }/>
      </div>
    )
  }
}

class BookSearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(e) {
    console.log(e);
    this.setState({query: e.target.value})
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="Search for book here..." required onInput={ this._handleInput } />
        <input type="submit" value="Search" />
      </form>
    )
  }
}

class BookSearchResult extends Component {
  render() {
    return (
      <div className="container">
        { this.props.books.map( (book) => <BookPrint book={book} /> ) }
      </div>
    )
  }
}

function More(link) {
  if (link.link) {
    return (
      <a href={ link.link }>More »</a>
    );
  } else {
    return null;
  }
}

function BookPrint(book) {
  console.log(book.book);
  book = book.book;
  if (book) {
    return (
      <div className="book-container">
        <h1 className="booktitle">{ book.title }</h1>
        <div className="bookcover">
          <img src={ book.thumbnail } />
        </div>
        <div className="bookinfo_sectionwrap">
          <div className="author">{ book.author }</div>
          <div>
            <span className="date">{ book.date }</span>
            <span className="page-count">{ book.pageCount }</span>
            <span className="review-count">{ book.reviewCount }</span>
            <span className="rating">{ book.rating }</span>
          </div>
        </div>
        <div className="synopsis">
          <div className="synopsis-window">
            <div className="synopsistext">
              <p>{ book.summary }</p>
              <p><More link={ book.bookLink } /></p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}



export default GoogleBookSearch;
