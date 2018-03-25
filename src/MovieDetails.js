import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';


const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
const moviesite = 'http://www.omdbapi.com/';
const movieType = '&type=movie&';
const movieSearch = '?i=';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     details: []
        // }
        // this.movieDetails = this.movieDetails.bind(this);
        // console.log(this.props.imdb)
    }

    componentWillReceiveProps(props) {
        axios.get(moviesite + movieSearch + this.props.imdb + movieType + apiKey).then((res) => {
            const results = res.data;
            // this.setState({
            //     details: results
            // });
            // console.log(results)
        })
    }

    render(){
        return(
            ReactDOM.createPortal(
                <div>
                    <h1>hi</h1>
                </div>,
                // this.props.children,
                document.getElementById('modal-root')
            )
        )
    }
}
export default MovieDetails;