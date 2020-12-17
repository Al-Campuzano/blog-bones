import React, { Component } from "react";

class DateAndAuthor extends Component {
  render() {
    const someDate = this.props.someDate
    const author = this.props.author
    return (
      <span>
        {someDate}
        &nbsp;by <a href="https://memory-alpha.fandom.com/wiki/William_T._Riker" target="_blank"
          rel="noopener noreferrer">{author}</a>
      </span>
    );
  }
}

export default DateAndAuthor;
