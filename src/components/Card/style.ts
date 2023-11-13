import styled from "styled-components";

export const Container = styled.div`
  width: 217.56px;
  height: 285px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 300ms linear;
  }

  img {
    margin-top: 18px;
    margin-bottom: 14px;
    width: 127px;
    height: 137px;
  }

  > div {
    display: flex;
    margin-bottom: 8px;
    align-items: center;
  }

  > div > p {
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    color: #2c2c2c;
    width: 119px;
    height: 38px;
  }

  .div-price {
    background: #373737;
    border-radius: 5px;
    width: 69px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 11px;
  }

  .text-price {
    font-weight: 700;
    font-size: 10px;
    line-height: 15px;
    color: #ffffff;
  }

  > span {
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    color: #2c2c2c;
    width: 192px;
    height: 25px;
    display: block;
    margin-bottom: 13px;
    overflow: hidden !important;
    text-overflow: ellipsis;
    display: inline-block;
    white-space: nowrap;
    width: 164px;
  }

  > span:hover {
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    color: #2c2c2c;
    width: 192px;
    height: 25px;
    display: block;
    margin-bottom: 13px;
    overflow: inherit;
    text-overflow: ellipsis;
    display: inline-block;
    white-space: break-spaces;
    width: 164px;
  }

  > button > svg {
    margin-right: 14px;
    font-size: 17px;
  }

  > button {
    background: #0f52ba;
    border-radius: 0px 0px 8px 8px;
    border: none;
    width: 100%;
    height: 31.91px;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > button:hover {
    background: #1161d8;
  }
`;
