import {formatPrice} from "../helpers.jsx";

function Item({
  details
}) {

  const { name, desc, price, status, image } = details;
  const isAvailable = status === "available";

  return (
    <div className="item">
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className={"fish-name"}>{name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable}>
          {isAvailable ? "Add to Order" : "Sold Out!"}
        </button>
      </li>
    </div>
  );
}

export default Item;