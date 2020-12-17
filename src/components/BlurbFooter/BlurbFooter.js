import React, { Component } from 'react'
import DateAndAuthor from '../DateAndAuthor/DateAndAuthor';

class BlurbFooter extends Component {
  render() {
    const someDate = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    return (
      <div>
        <p><DateAndAuthor someDate={someDate.toLocaleDateString()} author="Riker" /> | <span>Comment button</span></p>
      </div>
    );
  }
}

export default BlurbFooter;
