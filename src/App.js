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

function MyClickedButton({ count, handleClick }) {
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

    const [global, setGlobal] = useState(0);
    const [firstClicks, setFirstClicks] = useState(0);
    const [secondClicks, setSecondClicks] = useState(0);
    function handleFirstClick() {
        const counter = firstClicks + 1;
        setFirstClicks(counter);
        setGlobal(counter + secondClicks);
    }
    function handleSecondClick() {
        const counter = secondClicks + 1;
        setSecondClicks(counter);
        setGlobal(firstClicks + counter);
    }

  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
          <GlobalButton value={global}/>
          <MyClickedButton count={firstClicks} handleClick={handleFirstClick} />
          <MyClickedButton count={secondClicks} handleClick={handleSecondClick} />
          <p>Total clicks from both buttons: {global}</p>
        <ShoppingList />
      </header>
    </div>
  );
}

export default App;