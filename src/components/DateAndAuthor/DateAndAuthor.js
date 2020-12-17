import React, { Component } from "react";

class DateAndAuthor extends Component {
  render() {
    const date = this.props.date
    const author = this.props.author
    return (
      <span>
        {date}
        &nbsp;by <a href="https://memory-alpha.fandom.com/wiki/William_T._Riker" target="_blank"
          rel="noopener noreferrer">{author}</a>
      </span>
    );
  }
}

export default DateAndAuthor;
