import React from 'react'
import CommentButton from '../CommentButton/CommentButton';
import DateAndAuthor from '../DateAndAuthor/DateAndAuthor';

function BlurbFooter() {
  const someDate = new Date(Date.UTC(2012,11,20,3,0,0));
  return (
    <div>
      <p>
        <DateAndAuthor date={someDate.toLocaleDateString()} author="Riker" /> 
        <span> | </span>  
        <CommentButton />
      </p>
    </div>
  );
}

export default BlurbFooter;
