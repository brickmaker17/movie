import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { value } = e.target;
        this.setState({
            search: value,
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props;
    }

    render() {
        return (
            <div>
                <form action="">
                    <input type="text" value={this.state.search} onChange={this.handleChange} />
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default Search;