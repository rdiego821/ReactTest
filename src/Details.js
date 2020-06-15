import React from "react";

const Details = (props) => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>hi lol
    </pre>
  );
};

export default Details;
