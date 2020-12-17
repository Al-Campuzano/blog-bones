import React, { Component } from "react";

class DateAndAuthor extends Component {
  render() {
    const someDate = this.props.someDate
    const author = this.props.author
    return (
      <span>
        <span>{someDate}</span> <span>by {author}</span>
      </span>
    );
  }
}

export default DateAndAuthor;
