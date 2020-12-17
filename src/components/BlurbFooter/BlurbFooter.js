import React, { Component } from 'react'
import CommentButton from '../CommentButton/CommentButton';
import DateAndAuthor from '../DateAndAuthor/DateAndAuthor';

class BlurbFooter extends Component {
  render() {
    const someDate = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    return (
      <div>
        <p>
          <DateAndAuthor someDate={someDate.toLocaleDateString()} author="Riker" /> 
          &nbsp;|&nbsp;  
          <CommentButton />
        </p>
      </div>
    );
  }
}

export default BlurbFooter;
