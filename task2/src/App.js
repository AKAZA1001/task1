import React from 'react';
import './App.css';
import Item from './components/Item';

const items = [
  {
    id: 1,
    name: 'Door Camera', 
    price: 100,
    image: require('./images/img1.jpg'), 
  },
  {
    id: 2,
    name: 'security camera',
    price: 80,
    image: require('./images/img2.jpg'), 
  },
  {
    id: 3,
    name: ' camera',
    price: 150,
    image: require('./images/img3.jpg'), 
  },
  {
    id: 4,
    name: 'Laptop',
    price: 200,
    image: require('./images/img4.jpg'), 
  },
  {
    id: 5,
    name: 'Headphone',
    price: 15,
    image: require('./images/img5.jpg'), 
  },
  {
    id: 6,
    name: 'Drone',
    price: 500,
    image: require('./images/img6.jpg'), 
  },
  {
    id: 7,
    name: 'Bluetooth',
    price: 25,
    image: require('./images/img7.jpg'), 
  },
  {
    id: 8,
    name: 'Controllers',
    price: 50,
    image: require('./images/img8.jpg'), 
  },
];

const formatPriceInINR = (price) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
};

const App = () => {
  return (
    <div className="container">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default App;
