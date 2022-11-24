import styled from "styled-components";

export const MediaCard = styled.div`
  /* background-color: grey; */
  box-shadow: 0 4px 6px rgb(49 54 68 / 5%), 0 5px 20px rgb(49 54 68 / 8%);
  height: 265px;
  color: blue;
  border-radius: 3px;
  display: inline-grid;
  grid-template-columns: 185px auto;
  transform: box-shadow 0.6s ease;
`;

export const MediaCover = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  background-color: green;
`;

export const MediaOverlay = styled.div`
  color: white;
  z-index: 3;
  padding: 12px;
  background: rgba(0, 0, 0, 0.6);
  text-align: left;
  font: 800 0.95rem overpass;
`;
export const MediaBodyFotter = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 44px;
  min-height: 0;
  min-width: 0;
`;
export const MediaFooter = styled.div`
  background-color: yellow;
  display: flex;
  align-items: center;
  padding: 0 17px;
  padding-right: 14px;

  @media (max-width: 800px) {
    padding: 0 12px;
    padding-right: 8px;
  }
`;
export const MediaGenres = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 20px;
  overflow: hidden;
`;
export const MediaBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding-bottom: 10px;
  position: relative;
  padding: 17px 0 17px 17px;
`;
