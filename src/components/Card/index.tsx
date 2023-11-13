import { Container } from "./style";
import { FiShoppingBag } from "react-icons/fi";
import { IProduct } from "../../utils/interfaces/interfaceProducts";
import Image from "next/image";
const Card = ({
  name,
  photo,
  price,
  description,
  id,
  addItemToCard,
  product,
}: IProduct) => {
  return (
    <Container>
      <img src={photo} alt="" />
      <div>
        <p className="name-product">{name}</p>
        <div className="div-price">
          <p className="text-price">R${price}</p>
        </div>
      </div>
      <span>{description}</span>
      <button id={id} onClick={() => addItemToCard(product)}>
        <FiShoppingBag />
        COMPRAR
      </button>
    </Container>
  );
};

export default Card;
