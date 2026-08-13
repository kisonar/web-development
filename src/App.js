import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


//const [mama, setMama] = useState(0);

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

function MyClickedButton() {
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

function GlobalButton( {value} ) {




    return (
        <button >
            Clicked {value} times
        </button>
    );
}



function App() {

    const [global, setGlobal] = useState(15);

  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
          <GlobalButton value={global}/>
        <MyClickedButton />
        <MyClickedButton />
        <ShoppingList />
      </header>
    </div>
  );
}

export default App;