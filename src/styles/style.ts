import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  .list-products {
    margin-bottom: 37px;
    justify-content: center;
    display: flex;
  }

  .div-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 18px;
    gap: 18px;
    /* width: 1080px; */
    max-width: 1080px;
  }

  @media (max-width: 704px) {
    gap: 0.5rem;
  }

  @media (min-height: 890px) {
    gap: 8.5rem;
  }

  @media (min-height: 1045px) {
    gap: 17.5rem;
  }
`;
