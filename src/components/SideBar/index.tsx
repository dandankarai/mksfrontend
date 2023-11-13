import { useSelector } from "react-redux";
import { RootState } from "../../store";
// import CardCart from "../CardCart";
import { Container, ContainerEmptyCart } from "./style";
import { FaShoppingBasket } from "react-icons/fa";
import CardInCart from "../CardInCart";

const SideBar = ({ active, sidebar }: any) => {
  const closeSidebar = () => {
    active(false);
  };

  const { currentSale, total } = useSelector(
    (state: RootState) => state.product
  );

  const emptyCart = () => {
    return (
      <ContainerEmptyCart>
        <FaShoppingBasket size={120} color={"white"} />
        <p className="empty-cart-text">
          Parece que seu carrinho ainda está vazio!
        </p>
      </ContainerEmptyCart>
    );
  };

  return (
    <Container className="animate__animated animate__fadeInRight">
      <div className="header-sidebar">
        <p>Carrinho de compras</p>
        <button onClick={closeSidebar}>
          <span>x</span>
        </button>
      </div>
      {currentSale.length === 0 ? (
        emptyCart()
      ) : (
        <>
          <div className="auxiliar-carousel-mobile">
            <ul className="cards-cart">
              {currentSale.map((product, index) => (
                <CardInCart
                  key={index}
                  photo={product.photo}
                  name={product.name}
                  id={product.id}
                  price={product.price}
                  amount={product.amount}
                />
              ))}
            </ul>
            <div className="div-total">
              <p className="total">Total:</p>
              <p className="price-total">R${total}</p>
            </div>
            <button className="btn-buy">Finalizar Compra</button>
          </div>
        </>
      )}
    </Container>
  );
};

export default SideBar;
