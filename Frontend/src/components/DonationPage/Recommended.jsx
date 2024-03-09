import Button from "./Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Clothes" title="Clothes" />
        
          <Button onClickHandler={handleClick} value="Fund" title="Fund" />
          <Button onClickHandler={handleClick} value="Toys" title="Toys" />
          <Button onClickHandler={handleClick} value="Furniture" title="Furniture" />
          <Button onClickHandler={handleClick} value="Food" title="Food" />
          <Button onClickHandler={handleClick} value="Book" title="Book" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
