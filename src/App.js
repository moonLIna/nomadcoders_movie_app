import React from 'react';

function Food({name, pic}) {
  return <div>
    <h2>I love {name}</h2>
    <img src={pic} alt={name}/>
  </div>;
}

const foodILike = [
  {
    id : 1,
    name : "water",
    image : "https://www.google.com/search?q=water&newwindow=1&safe=active&sxsrf=ALeKk00VduxSTpzfuTq-O09O30C5RUq76A:1588749535904&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi20OWd2Z7pAhWEHqYKHVIUCOcQ_AUoAXoECBwQAw&biw=1280&bih=607&dpr=1.5#imgrc=RqJdkQTA4o38fM"
  },
  {
    id : 2,
    name : "choco",
    image : "https://vaya.in/recipes/wp-content/uploads/2018/02/Milk-Chocolate-1.jpg"
  }
]
function renderFood(dish){
  return<Food name={dish.name} pic={dish.image}/>
}

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} pic={dish.image}/>
      ))}
    </div>
  );
}

export default App;
