import styled from 'styled-components';

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  padding: 0 15vw;
  gap: 4vh;
  width: 100%;
  margin-top: 8vh;

  @media screen and (max-width: 767px) {
    padding: 0 3vw;
  }
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

export const AmountInput = styled.input`
  font-size: 26px;
  width: 50%;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const RecipientInput = styled.input`
  font-size: 26px;
`;

export const FormBtn = styled.button`
  margin: 8vh auto;
  width: 50%;
  font-size: 30px;
`;

export const Message = styled.p`
  width: 100%;
  margin-top: 8vh;
  text-align: center;
  font-size: 46px;
`;
