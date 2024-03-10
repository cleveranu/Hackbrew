import React, { useState } from 'react';
import axios from 'axios';
import './DonationPage.css'; // Make sure to create a DonationInput.css file for the styling
import {Link } from 'react-router-dom';
const DonationInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDownload = (content, filename) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

 // React component part remains the same

const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:3001/save-text', { text: inputValue })
      .then(response => console.log(response.data))
      .catch(error => console.error('Error saving text:', error));
  };
  
  // Rest of your React component
  ;

  return (
    <div className="donation-container">
      <form className="donation-form" onSubmit={handleSubmit}>
        <label htmlFor="donationInput" className="donation-label">
          Please enter what you'd like to donate:
        </label>
        <input
          id="donationInput"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="I want to donate food... I want to volunteer in NGOs"
          className="donation-input"
        />
        <Link to='/products'>
        <button type="submit" className="donation-submit">
          Submit
        </button>
        </Link>
       
      </form>
    </div>
  );
};

export default DonationInput;
