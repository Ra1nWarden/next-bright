"use client";
import React from "react";

function CodeSnippet({ children }) {
  const [shown, setShown] = React.useState(false);
  if (shown) {
    return children;
  } else {
    return (
      <div className="reveal">
        <button onClick={() => setShown(true)}>Reveal Content</button>
      </div>
    );
  }
}

export default CodeSnippet;
