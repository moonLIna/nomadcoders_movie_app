import React from 'react';

function Food({name}) {
return <h1>I love {name}</h1>;
}

function App() {
  return (
    <div className="App">
      hello
      <Food name="drinking"/>
      <Food name="water"/>
    </div>
  );
}

export default App;
