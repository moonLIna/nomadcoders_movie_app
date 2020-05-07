import React from 'react';
import PropTypes from "prop-types";

function Food({name, pic, rating}) {
  return <div>
    <h2>I love {name}</h2>
    <p>{rating}/5</p>
    <img src={pic} alt={name}/>
  </div>;
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  pic : PropTypes.string.isRequired,
  rating : PropTypes.number
}

const foodILike = [
  {
    id : 1,
    name : "water",
    image : "https://www.google.com/search?q=water&newwindow=1&safe=active&sxsrf=ALeKk00VduxSTpzfuTq-O09O30C5RUq76A:1588749535904&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi20OWd2Z7pAhWEHqYKHVIUCOcQ_AUoAXoECBwQAw &biw=1280&bih=607&dpr=1.5#imgrc=RqJdkQTA4o38fM",
    rating : 3
  },
  {
    id : 2,
    name : "choco",
    image : "https://vaya.in/recipes/wp-content/uploads/2018/02/Milk-Chocolate-1.jpg",
    rating: 4
  }
]
function renderFood(dish){
  return<Food name={dish.name} pic={dish.image}/>
}

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          pic={dish.image} 
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
