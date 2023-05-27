import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const cartClass = inCart? "in-cart" : null
  const cartBtn = inCart? "Remove From Cart" : "Add to Cart"

  function handleButton()  {
    setInCart((inCart) => !inCart)
  }
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleButton}>{cartBtn}</button>
    </li>
  );
}

export default Item;
