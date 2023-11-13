import styled from "styled-components";

export const Container = styled.li`
  width: 379px;
  height: 95px;
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: 47px;
  margin-bottom: 22px;
  margin-top: 6px;

  > img {
    margin-left: 21px;
    width: 50px;
    height: 61px;
  }

  .name-product {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: #2c2c2c;
    width: 72px;
    margin-left: 15px;
    color: #2c2c2c;
  }

  .auxiliar > span {
    font-weight: 400;
    font-size: 5px;
    line-height: 6px;
    color: #000000;
  }

  .price-product {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    margin-left: 30px;
    width: 89px;
  }

  .div-btns {
    background: #ffffff;
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;
    width: 57px;
    height: 19px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn-less {
    background: #ffffff;
    border: none;
    margin-left: 8px;
    border-right: 0.5px solid #bfbfbf;
    height: 11.5px;
    padding-right: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
  }

  .btn-more {
    background: #ffffff;
    border: none;
    margin-right: 8px;
    border-left: 0.5px solid #bfbfbf;
    height: 11.5px;
    padding-left: 4px;
    margin-right: 8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
  }

  .qnt {
    font-weight: 400;
    font-size: 11px;
    line-height: 10px;
    margin-left: 4px;
    margin-right: 4px;
  }

  .delete {
    /* margin-left: 12px; */
    margin-top: -87px;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    border: none;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 32px;
  }

  .delete:hover {
    border: 1px solid white;
  }

  .delete > p {
    color: #ffffff;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 1px;
  }

  .div-auxiliar-mobile {
    display: none;
  }

  @media (max-width: 685px) {
    width: 250px;
    height: 220.05px;
    margin-left: 20px;
    flex-direction: column;
    margin-bottom: 13px;

    .delete {
      margin-left: 196px;
      margin-top: -181px;
      background-color: #ffffff;
      left: 6px;
    }

    .delete > p {
      color: #000000;
      font-weight: 400;
      font-size: 42px;
      line-height: 17px;
    }

    .auxiliar {
      display: none;
    }

    .price-product {
      display: none;
    }

    > img {
      margin-top: 22px;
      width: 82px;
      height: 101px;
    }

    .name-product {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #2c2c2c;
      width: 250px;
      text-align: center;
      margin-top: 13px;
      margin-bottom: 12px;
    }

    .div-auxiliar-mobile {
      display: flex;
      align-items: center;
    }

    .div-price {
      background: #373737;
      border-radius: 5px;
      width: 91px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text-price {
      font-weight: 700;
      font-size: 15px;
      line-height: 15px;
      color: #ffffff;
    }

    .div-btns {
      margin-bottom: 0;
      width: 64px;
      height: 26px;
      margin-right: 28px;
    }
  }
`;
