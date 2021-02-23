import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'photoshop', price: '$90.99' },
    { name: 'filmora', price: '$60.99' },
    { name: 'after effect', price: '99.99' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>this is my react try base</p>

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
      </header>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    backgroundColor: 'green',
    margin: '10px',
    height: '300px',
    width: '200px',
    float: 'left',
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h6>{price}</h6>
      <button>BUY NOW</button>
    </div>
  )

}

export default App;
