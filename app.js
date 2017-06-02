var GroceryList = (props) => (
  <ul>
    <GroceryListItem groceries = {props.groceries}/> 
    <GroceryListItem groceries = {props.groceries}/> 
  </ul>
);

// Here we create a `TodoList` component
var TodoList = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
);

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
    <GroceryList groceries={['Apples', 'Banana']}/>
  </div>
);

var GroceryListItem = (props) => (
  <li>{props.groceries[0]}</li>  
);


ReactDOM.render(<App />, document.getElementById('app'));