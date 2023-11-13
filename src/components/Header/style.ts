import styled from "styled-components";

export const Container = styled.header`
  height: 101px;
  background: #0f52ba;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 5px 10px rgb(0 0 0 / 14%);

  > button {
    width: 90px;
    height: 45px;
    background: #ffffff;
    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 88px;
  }

  > button:hover {
    border: 1px solid black;
    border-bottom: 2px solid black;
  }

  > button > svg {
    font-size: 15px;
  }

  button > span {
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    color: #000000;
  }

  @media (max-width: 715px) {
    > button {
      width: 71px;
      height: 38px;
      margin-right: 26px;
    }
  }
`;
