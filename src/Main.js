import React, { Component } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
const moviesite = "http://www.omdbapi.com/?i=tt3896198&";
const movieUrl = moviesite + apiKey;

class Main extends Component {
    state = {
        movies: [],
        loading: true,
        err: false,
        errMsg: ''
    }
    componentDidMount() {
        axios.get(movieUrl).then((res) => {
            let results = res.data;
            // console.log(results);
            this.setState({
                movies: results,
                loading: false,
            });
        })
            .catch((err) => {
                console.error(err);
                this.setState({
                    loading: false,
                    errMsg: err.message,
                    err: true
                })
            })
    }
    render() {
        let { movies, loading, err, errMsg } = this.state;
        console.log(movies)
        
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
                    <div>
                        <h1>{movies.Title}</h1>
                        <p>{movies.Plot}</p>
                        <img src={movies.Poster} alt={movies.Title}/>
                        {/* <p>{movies}</p> */}
                        {/* {movies.map((movie, i) => {
                            let { title } = movie;
                            return <p key={i}>{ title }</p>
                        })} */}
                    </div>
        );
    }
}

export default Main;