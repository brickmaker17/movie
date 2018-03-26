import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Modal = styled.div`
    background-color: rgba(255,255,255,1.0);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 340px auto 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
        "heading ."
        "image actors"
        "image director"
        "image writer"
        "image score"
        "image rating"
        "image awards"
        "image runtime"
        "image production"
        "image realease"
        "plot plot"
    
`
const Rate = styled.p`
    grid-area: rating;
`
const Run = styled.p`
    grid-area: runtime;
    justify-self: start;
    
`
const Rating = styled.p`
    grid-area: runtime;
    justify-self: center;
`
const Write = styled.p`
    grid-area: writer;
`
const Heading = styled.h1`
    grid-area: heading;
    margin: 20px;
`
const Score = styled.p`
    grid-area: score;
`
const Plots = styled.p`
    grid-area: plot;
`
const Directors = styled.p`
    grid-area: director;
`
const Award = styled.p`
    grid-area: awards;
`
const Image = styled.img`
    grid-area: image;
    margin: 20px;
`
const Actor = styled.h4`
    grid-area: actors;
`
const Close = styled.a`
    position: fixed;
    margin: 20px;
    top: 0;
    right: 0;
    text-decoration: none;
`
const Prod = styled.p`
    grid-area: production;
`
const Release = styled.p`
    grid-area: realease
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
                    <Heading>{ Title }</Heading>
                    <Image src={ Poster } alt={ Title }/>
                    <Actor>Actors: { Actors }</Actor>
                    <Award>Awards: { Awards }</Award>
                    <Directors>Director: { Director }</Directors>
                    <Score>Metascore: { Metascore }</Score>
                    <Prod>Production: { Production }</Prod>
                    <Release>Released: { Released }</Release>
                    <Write>Writers: { Writer }</Write>
                    <Run>Runtime: { Runtime }</Run>
                    <Rating>Rated: { Rated }</Rating>
                    <Rate>IMDB Rating: { imdbRating }</Rate>
                    <Plots>{ Plot }</Plots>
                </Modal>,
                // this.props.children,
                document.getElementById('modal-root')
            )
        )
    }
}
export default MovieDetails;