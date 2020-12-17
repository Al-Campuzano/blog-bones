import React from "react";

function DateAndAuthor(props) {
  const date = props.date
  const author = props.author
  return (
    <span>
      {date}
      &nbsp;by <a href="https://memory-alpha.fandom.com/wiki/William_T._Riker" target="_blank"
        rel="noopener noreferrer">{author}</a>
    </span>
  );
}

export default DateAndAuthor;
