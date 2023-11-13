import { Container } from "./style";
import { IProductCart } from "../../utils/interfaces/interfaceProducts";
import { useDispatch } from "react-redux";
import {
  removeCard,
  increase,
  decrease,
  totalValue,
} from "../../slices/sliceProducts";
import "animate.css";

const CardInCart = ({ id, name, photo, price, amount }: IProductCart) => {
  const dispatch = useDispatch();

  const updateTotalValue = () => {
    dispatch(increase(id));
    dispatch(totalValue());
  };

  const increaseAndDecreaseButtons = () => {
    if (amount === 1) {
      dispatch(removeCard(id));
    }
    dispatch(decrease(id));
    dispatch(totalValue());
  };

  return (
    <Container className="animate__animated animate__backInLeft">
      <img src={photo} alt="" />
      <p className="name-product">{name}</p>
      <div className="div-auxiliar-mobile">
        <div className="div-btns">
          <button onClick={increaseAndDecreaseButtons} className="btn-less">
            -
          </button>
          <p className="qnt">{amount}</p>
          <button onClick={updateTotalValue} className="btn-more">
            +
          </button>
        </div>
        <div className="div-price">
          <p className="text-price">R${price}</p>
        </div>
      </div>
      <div className="auxiliar">
        <div className="div-btns">
          <button onClick={increaseAndDecreaseButtons} className="btn-less">
            -
          </button>
          <p className="qnt">{amount}</p>
          <button onClick={updateTotalValue} className="btn-more">
            +
          </button>
        </div>
      </div>
      <p className="price-product">R${price}</p>
      <button onClick={() => dispatch(removeCard(id))} className="delete">
        <p>x</p>
      </button>
    </Container>
  );
};

export default CardInCart;
