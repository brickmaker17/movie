import React, { Component } from 'react';
import MainItem from './MainItem';

class Main extends Component {
    render() {
        // console.log(this.props.movies)
        const {
            loading, err, errMsg,
        } = this.props.movies;
        const titles = this.props.movies.movies.Search || [];
        const listMovies = titles.map((title, i) => <MainItem state={this.props.movies} {...title} key={i} />);
        // console.log(this.props.movies);
        // const resultItems = this.props.movies.movies.Search.map((result) => <MainItem />);
        return (
            loading ?
                <div>
                    <h1>IM Loading</h1>
                </div>
                :
                err ?
                    <div>
                        <p>Sorry, your data is unavailable.</p>
                        <p>{errMsg}</p>
                    </div>
                    :
                    <ul>
                        {listMovies}
                    </ul>
        );
    }
}

export default Main;