import styled from "styled-components";

export const StyledUl = styled.ul`
  max-width: 400px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;

  input {
    appearance: none;
    border: 1px solid #4711de;
    border-radius: 0.25em;
    background-color: #fff6;
    padding: 0.5em;
    flex-grow: 1;
    min-width: none;
    width: 100%;
    display: block;
  }

  button {
    appearance: none;
    border: 1px solid #4711de;
    background-color: #4711de;
    border-radius: 0.25em;
    color: #fff;
    font-weight: 600;
    padding: 0.5em 1em;
    margin-left: 1em;
    cursor: pointer;
  }
`;
