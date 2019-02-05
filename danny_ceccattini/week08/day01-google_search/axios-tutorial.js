import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(result => {
        console.log(result);
      })
  }
}
