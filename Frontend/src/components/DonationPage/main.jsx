import React, { useState } from 'react';
import Navigation from './Navbar';
import Products from './Product';
import products from '../data';
import Recommended from './Recommended';
import { Link } from 'react-router-dom';
import './Card.css'; // Assuming CSS for Card is stored here

function Main() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.Name.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, description, newPrice, title }) =>
          category === selected ||
          color === selected ||
          description.includes(query) ||
          newPrice.toString().includes(query) ||
          title.includes(query)
      );
    }

    return filteredProducts.map(({  id,
      Name,
      One_line,
      Description,
      Need_Rating,
      Established_in,
      State,
      City }) => (
      <Link 
      to={`/product-detail/${id}`} 
    
      className="card-link" key={id}>
      <div className="card">
        {/* <img src={img} alt={Name} className="card-image"/> */}
        <div className="card-content">
          <h3 className="card-title">{Name}</h3>
          <div className="card-rating">{Need_Rating}Need Stars</div>
          <div className="card-reviews">{One_line} Desc:</div>
          <div className="card-price">
            <span className="card-prevPrice">{State}</span>
            <span className="card-newPrice">{City}</span>
          </div>
          <button className="card-buy-button">Visit</button>
        </div>
      </div>
    </Link>
    
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default Main;
