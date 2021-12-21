import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  max-width: 18rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  overflow: hidden;

  background: var(--white);
  border: 1px solid var(--purple);
  cursor: pointer;

  display: flex;

  > div {
    background: var(--purple);
    padding: 0 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  > span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 0.75rem;
    width: 15rem;
    font: 500 0.875rem "Roboto", sans-serif;
  }
`