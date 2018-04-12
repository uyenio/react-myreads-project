import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookControl extends Component {
    constructor(props) {
        super(props);
        // this.state = {shelf: 'currentlyReading'};
        // this.handleChange = this.handleChange.bind(this);
    }

    static propTypes = {
        moveBook: PropTypes.func.isRequired
      }
    
    // handleChange(event) {
    //   console.log(event.target.value)
    //   this.setState({value: event.target.value});
    // }
  
    render() {
        const { shelf, book, moveBook } = this.props

        return (
            <select value={shelf} onChange={() => moveBook(book, 'wantToRead')} >
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }

}

export default BookControl