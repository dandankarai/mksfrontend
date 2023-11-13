import styled from "styled-components";

export const ContainerEmptyCart = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  > p {
    color: #ffffff;
    font-size: 24px;
    letter-spacing: 0.02rem;
  }
`;

export const Container = styled.div`
  background: #0f52ba;
  position: fixed;
  height: 100%;
  right: 0;
  top: 0;
  width: 486px;
  z-index: 1;

  .auxiliar-carousel-mobile {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    height: 600px;
    width: 100vw;
  }

  .header-sidebar {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }

  .header-sidebar > p {
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    width: 166px;
    color: #ffffff;
    margin-left: 47px;
    margin-bottom: 60px;
  }

  .header-sidebar > button {
    background: #000000;
    color: #ffffff;
    width: 38px;
    height: 38px;
    border-radius: 50px;
    border: none;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-sidebar > button > span {
    color: #ffffff;
    font-weight: 400;
    font-size: 25px;
    line-height: 15px;
    padding-bottom: 3px;
  }

  .header-sidebar > button:hover {
    border: 2px solid white;
  }

  .cards-cart {
    overflow: scroll;
    height: 450px;
    margin-bottom: 100px;
    width: 463px;
  }

  .cards-cart::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  .cards-cart::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 5px;
  }

  .cards-cart::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  .div-total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    position: fixed;
    bottom: 116px;
  }

  .total {
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: #ffffff;
    margin-left: 47px;
  }

  .price-total {
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: #ffffff;
    margin-right: 63px;
    margin-left: 215px;
  }

  .btn-buy {
    height: 97px;
    background-color: #000000;
    color: #ffffff;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    width: 100%;
    border: none;
    position: fixed;
    bottom: 0;
  }

  .btn-buy:hover {
    background-color: #1e1d1d;
  }

  @media (max-width: 685px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    /* background: red; */

    .empty-cart-text{
      margin-left:20px
    }

    .auxiliar-carousel-mobile {
      display: flex;
      flex-direction: column;
      justify-content:center
      align-items:center;
      overflow: scroll;
      width: 100vw;
      /* height: 60%; */
      /* background: blue; */
    }

    .header-sidebar > p {
      margin-left: 32px;
    }

    .header-sidebar > button {
      margin-right: 15px;
      align-items: center;
    }

    .div-total {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .price-total {
      margin-left: 39px;
    }

    .total {
      margin-left: 69px;
    }

    .cards-cart {
      overflow-x: scroll;
      display: flex;
      flex-direction: row;
      width: 100vw;
    }
  }
`;
