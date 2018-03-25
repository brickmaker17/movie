import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
            this.state = {
                search: ''
            }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // console.log(this.props.search)
    }

    handleChange(e) {
        const { value } = e.target;
        const { search } = this.props;
            this.setState({
                search: value
            })
        // console.log(value);
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.submit(this.state.search);
    }

    render() {
        // console.log(this.props.search);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search Movie Title..." />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Search;