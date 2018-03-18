import React, { Component } from 'react';
import Search from './Search';
import Main from './Main';

class Container extends Component {
    render() {
        return (
            <div>
                <h2>Search for Movies or Seasons</h2>
                <Search />
                <Main />
            </div>
        );
    }
}

export default Container;
