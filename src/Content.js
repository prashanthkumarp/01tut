import React from "react";
const handlefunc = () => {
  const names = ["prashanth", "shakthi", "vani"];
  const ival = Math.floor(Math.random() * 3);
  return names[ival];
};
const Content = () => {
  return (
    <main>
      <p>HELLO {handlefunc()}</p>
    </main>
  );
};

export default Content;
