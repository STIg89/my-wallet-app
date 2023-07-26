import styled from 'styled-components';

export const AppWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3vh 10vw;

  @media screen and (max-width: 767px) {
    padding: 1vh 3vw;
  }
`;
