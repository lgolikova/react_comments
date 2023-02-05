import React from 'react';
import "./styles.css";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            newComment: ''
        };
    }

    updateValue = (e) => {
        this.setState({ newComment: e.target.value.replace(/xxx|viagra/ig, "***") })
    }

    newComment = () => {
        this.setState({
            comments: [
                ...this.state.comments,
                { comment: this.state.newComment },
            ],
            newComment: ''
        });
    };

    addComment = () =>
        this.state.comments.map((item) => (
            <div className='comment'>
                {item.comment}
            </div>
        ));

    render = () => (
        <div className="box">
            <div className="wall">
                {this.addComment()}
            </div><br />
            <textarea
                className="text"
                onChange={this.updateValue} value={this.state.newComment}>
            </textarea><br />
            <button className="btn" onClick={this.newComment}>
                Send
            </button>
        </div>
    );
}       