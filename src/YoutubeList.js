import React, { Component } from 'react';
import axios from 'axios';


const youtube = 'https://www.googleapis.com/youtube/v3/search?part=snippet&';
const ysearch = 'q=';
const yKey = process.env.REACT_APP_YOUTUBE;

class YoutubeList extends Component {
    constructor(props){
        super(props);
        this.state = {
            youtube: []
        }
    }

componentDidMount(props) {
    axios.get(youtube + ysearch + 'matrix' + '&key=' + yKey).then((res)=> {
        const results = res.data;
        this.setState({
            youtube: results
        });
        // console.log(results)
    })
}
    render(){
        console.log(this.state.youtube)
        return(
            <div>
                <p>hi</p>
            </div>
        )
    }
}

export default YoutubeList;