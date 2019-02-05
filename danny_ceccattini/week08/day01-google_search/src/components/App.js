import React, { Component } from 'react';
import GoogleSearch from './GoogleSearch.js';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <GoogleSearch />
      </div>
    );
  }
}
