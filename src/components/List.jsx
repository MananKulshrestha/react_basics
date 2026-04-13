
function List(props){
    const fruits = ["Apple", "Cherry", "Banana", "Date", "Elderberry"];
    fruits.sort(); //for no reason just to show
    
    const fruitsList = fruits.map(function(fruit) {  //or use arrow functions
        return <li>{fruit}</li>;
    }); 

    const fruits1 = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 }
  ];

  const listItems = fruits1.map(fruit =>
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.calories} cal</b>
    </li>
  );

  const lowcal = fruits1.filter(function(fruit){return fruit.calories < 100}); //btw the function attribute is going to take each element of fruits1

  const lowcalList = lowcal.map(fruit => <li key={fruit.id}> {fruit.name}: {fruit.calories} cal</li>);

  return (<>  
    <ol>{fruitsList}</ol>
    <ol>{listItems}</ol>
    <h2>Fruits with less than 100 calories:</h2>
    <ol>{lowcalList}</ol>
    </>
  ); //add empty tag because returning multiple
};

export default List;