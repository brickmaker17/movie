import React, { Component } from 'react';
import MovieDetails from './MovieDetails';
import styled from 'styled-components';

const ListMovies = styled.li`
    list-style: none;
`


export default class MainItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: props.state.showModal
        }
        this.handleClick = this.handleClick.bind(this);
        // console.log(this.props)
    }
    handleClick(e) {
        e.preventDefault();
        // console.log(this.props.state)
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));
        // console.log(this.props)
    }

    render() {
        let { Title, Poster, Year, imdbID } = this.props;
        const modal = this.state.showModal ? (
            <MovieDetails click={this.handleClick} imdb={ imdbID }></MovieDetails>
        ) : null;
        
        // console.log(this.handleClick);
        return (
            <div>
                <ListMovies>
                    <h1>{Title}</h1>
                    <h3>Year: {Year}</h3>
                    <a href="#" onClick={this.handleClick}><img src={Poster} alt={Title} /></a>
                </ListMovies>
                    {modal}
            </div>
        );
    }
}