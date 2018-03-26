import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Modal = styled.div`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Close = styled.a`
    position: fixed;
    margin: 20px;
    top: 0;
    right: 0;
    text-decoration: none;
`


const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
const moviesite = 'http://www.omdbapi.com/';
const movieType = '&type=movie&';
const movieSearch = '?i=';


class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: []
        }
        // console.log(this.props)
       
    }

    componentDidMount(props) {
        axios.get(moviesite + movieSearch + this.props.imdb + movieType + apiKey).then((res) => {
            const results = res.data;
            this.setState({
                details: results
            });
            // console.log(results)
            // console.log(results);
        })
    }

    render(){
        const { Title, Actors, Awards, Director, Plot, Metascore, Production, Rated, Released, Writer, Runtime, imdbRating, Poster  } = this.state.details;
        console.log(this.state.details)
        return(
            ReactDOM.createPortal(
                <Modal>
                    <Close href="#" onClick={this.props.click}>X</Close>
                    <h1>{ Title }</h1>
                    <img src={ Poster } alt={ Title }/>
                    <h4>{ Actors }</h4>
                    <p>{ Awards }</p>
                    <p>{ Director }</p>
                    <p>{ Plot }</p>
                    <p>{ Metascore }</p>
                    <p>{ Production }</p>
                    <p>{ Rated }</p>
                    <p>{ Released }</p>
                    <p>{ Writer }</p>
                    <p>{ Runtime }</p>
                    <p>{ imdbRating }</p>

                </Modal>,
                // this.props.children,
                document.getElementById('modal-root')
            )
        )
    }
}
export default MovieDetails;