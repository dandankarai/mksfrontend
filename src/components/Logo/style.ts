import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-left: 65px;
  cursor: pointer;

  > p {
    font-weight: 600;
    font-size: 40px;
    line-height: 19px;
    color: #ffffff;
    margin-right: 5px;
  }

  > span {
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
    color: #ffffff;
    margin-top: 4px;
  }

  @media (max-width: 715px) {
    margin-left: 26px;
  }

  @media (max-width: 400px) {
    > p {
      font-size: 35px;
    }

    > span {
      font-size: 17px;
    }
  }
`;
