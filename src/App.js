import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


export const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map(product =>
    <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
    >
      {product.title}
    </li>
);

export function ShoppingList() {
  return (
      <ul>{listItems}</ul>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);


  function handleClick() {
    //alert('You clicked me!');
    setCount(count + 1);
  }

  return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <MyButton />
        <MyButton />
        <ShoppingList />
      </header>
    </div>
  );
}

export default App;