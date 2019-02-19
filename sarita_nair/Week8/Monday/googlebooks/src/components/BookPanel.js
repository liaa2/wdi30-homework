import React, {Component} from 'react';
import SearchBooks from './SearchBooks';
import Library from './Library';
import jsonp from 'jsonp-es6';

class BookPanel extends Component{
  constructor(){
    super();
    this.getBooks = this.getBooks.bind(this);
    this.state = {
      images: []
    }
  }
  getBooks(book){
    console.log(book);
    const booksURL='https://www.googleapis.com/books/v1/volumes';
    const bookParams = {
          q: book,
          format: 'json'
        };
    jsonp(booksURL, bookParams).then((results) => {
      const books = results.items[0].volumeInfo.imageLinks.thumbnail;
      // console.log(books);
      const images = this.state.images;
      images.push(books);
      // console.log(images[0]);
      this.setState({images: images}); // {"images": images}
      // console.log(this.state.images);

    });
    // $.ajax('https://www.googleapis.com/books/v1/volumes?q=' + book).done(function (info) {
    //   const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
    //   $('#cover').attr('src', cover);
    // });
  }
  render(){
    return(
      <div>
      <SearchBooks onClick={(book)=>this.getBooks(book)}/>
      <Library images={this.state.images}/>
      </div>
    );
  }
}
export default BookPanel;
