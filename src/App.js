import React, { Component } from 'react';
import Search from './Search';
import Main from './Main';
import axios from 'axios';
import './App.css';

const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
const moviesite = 'http://www.omdbapi.com/';
const movieType = '&type=movie&';
const movieSearch = '?s=';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            search: '',
            showModal: false,
            loading: true,
            err: false,
            errMsg: '',
        };
        this.formSubmit = this.formSubmit.bind(this);
    }

    componentDidMount(){
        axios.get(moviesite + movieSearch + 'matrix' + movieType + apiKey).then((res) => {
            const results = res.data;
            this.setState({
                movies: results,
                // search: change,
                loading: false,

            });
            console.log(this.state.search);
        })
    }


    formSubmit(search) {
        axios.get(moviesite + movieSearch + search + movieType + apiKey).then((res) => {
            const results = res.data;
            this.setState({
                movies: results,
                // search: change,
                loading: false,

            });
            // console.log(search);
        })
            .catch((err) => {
                console.error(err);
                this.setState({
                    loading: false,
                    errMsg: err.message,
                    err: true,
                });
            });
    }
    
    

    render() {
        // console.log(search);
        return (
            <div className="App">
                <h2>Search for Movies or Seasons</h2>
                <Search search ={ this.state.search } submit={this.formSubmit}/>
                <Main movies={this.state} />
            </div>
        );
    }
}


export default App;
