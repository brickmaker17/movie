import React, { Component } from 'react';
import MovieDetails from './MovieDetails';


class MainItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: props.state.showModal
        }
        this.handleClick = this.handleClick.bind(this);
        // console.log(this.state)
    }
    handleClick(e) {
        e.preventDefault();
        // console.log(this.props.state)
        this.setState(prevState => ({
                showModal: !prevState.showModal
            }));
            console.log(this.state)
    }

    render() {
        let { Title, Poster, Year, imdbID } = this.props;
        // console.log(this.props.state);
        return (
            <div>
                <li>
                    <h1>{Title}</h1>
                    <h3>Year: {Year}</h3>
                    <a href="#" onClick={this.handleClick}><img src={Poster} alt={Title} /></a>
                </li>
                <MovieDetails imdb={imdbID} ></MovieDetails>
            </div>
        );
    }
}
export default MainItem;