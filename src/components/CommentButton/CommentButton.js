import React, { useState } from "react";

function CommentButton() {
  const [count, setCount] = useState(0);

  return (
    <span>
      <button type="button" className="with-hooks" onClick={() => setCount(count + 1)}>
        {count === 0 ? "Leave a comment" : `${count} comments`}
      </button>
    </span>
  );
}

export default CommentButton;
