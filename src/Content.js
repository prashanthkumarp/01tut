import React from "react";

const Content = () => {
  const handlefunc = () => {
    const names = ["prashanth", "shakthi", "vani"];
    const ival = Math.floor(Math.random() * 3);
    return names[ival];
  };
  const handleclick = () => {
    console.log('clicked it');
  };
  const handleclick1 = (name) => {
    console.log( ` ${name} clicked it`);
  };
  const handleclick2 = (e) => {
    console.log(e);
  };
  const handleclick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p>HELLO {handlefunc()}</p>
      <button onClick={handleclick}>click me</button>
      <button onClick={() => handleclick1('pppp')}>click me1</button>
      <button onClick={(e) => handleclick2(e)}>click me2</button>
      <button onClick={(e) => handleclick3(e)}>click me2</button>
    </main>
  );
};

export default Content;
