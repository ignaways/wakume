import styled from "styled-components";

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(390px, 460px));
  justify-content: center;
  grid-column-gap: 50px;
  grid-row-gap: 40px;

  @media (min-width: 2230px) {
    grid-template-columns: repeat(4, minmax(390px, 460px));
  }
  @media (max-width: 1560px) {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media (max-width: 1345px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 40px;
  }
  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 380px) {
    grid-template-columns: repeat(auto-fill, 230px);
  }
`;
export const MediaCard = styled.div`
  background-color: grey;
  box-shadow: 0 4px 6px rgb(49 54 68 / 5%), 0 5px 20px rgb(49 54 68 / 8%);
  height: 265px;
  color: blue;
  border-radius: 3px;
  display: inline-grid;
  grid-template-columns: 185px auto;
  transform: box-shadow 0.6s ease;
`;

