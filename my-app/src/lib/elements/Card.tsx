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
  /* background-color: 'yellow';
  display: flex;
  flex-direction: column;
  justify-content: flex-end; */
  background-color: grey;
  box-shadow: 0 4px 6px rgb(49 54 68 / 5%), 0 5px 20px rgb(49 54 68 / 8%);
  height: 265px;
  color: blue;
  border-radius: 3px;
  display:inline-grid;
  grid-template-columns: 185px auto;
  transform: box-shadow .6s ease;
`;

export const CardAiring = styled.div`
  background-color: grey;
  box-shadow: 2px 2px 4px #000000;
  height: 2em;
  color: blue;
  padding: 1em;
`;
