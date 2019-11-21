import React from "react";

const Instructions = ({ text }) => {
  const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);

  return (
    <>
      {sentences.map(sentence => (
        <p style={{ margin: ".1rem" }}>{sentence}</p>
      ))}
    </>
  );
};

export default Instructions;
