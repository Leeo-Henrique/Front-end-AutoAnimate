import styled from "styled-components";

export const StyledLi = styled.li`
  background-color: var(--mainColor);
  padding: 0.75em;
  border-radius: 0.5em;
  margin-bottom: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 230px;
  div {
    display: flex;
    justify-content: end;
  }
  div button {
    background: none;
    border: 0px;
    padding: 0px;
    margin-left: 0.75em;
  }
  svg {
    display: flex;
    color: var(--buttonColor);
  }
  svg path {
    font-size: 14px;
  }
  .close__buton {
    color: var(--closeButton);
  }
  span {
    font-weight: 500;
    text-transform: capitalize;
    color: var(--fontColor);
    font-family: "Silka Medium", sans-serif;
    text-overflow: ellipsis;
    width: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
  }
`;
