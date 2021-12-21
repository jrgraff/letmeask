import styled from "styled-components"

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`

export const Aside = styled.aside`
  background: var(--purple);
  color: var(--white);

  display: flex;
  flex: 7;
  flex-direction: column;
  justify-content: center;

  padding: 7.5rem 5rem;

  img {
    max-width: 20rem;
    width: 100%;
  }

  strong {
    font: 700 2.25rem "Poppins", sans-serif;
    margin-top: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1rem;
    color: var(--background);
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const Content = styled.main`
  padding: 0 2rem;
  display: flex;
  flex: 8;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 20rem;
    align-items: stretch;
    text-align: center;

    img {
      align-self: center;
    }

    h2 {
      margin: 4rem 0 1.5rem;
      font: 700 1.5rem "Poppins", sans-serif;
    }
  }

  form {
    > input {
      height: 3.125rem;
      border-radius: 0.5rem;
      padding: 0 1rem;
      background: var(--white);
      border: 1px solid var(--gray-medium);
    }

    > button {
      margin-top: 1rem;
    }

    > button,
    input {
      width: 100%;
    }
  }

  p {
    font-size: 0.875rem;
    color: var(--gray-dark);
    margin-top: 1rem;

    a {
      margin-left: .225rem;
      color: var(--pink-dark);
      transition: filter .2s;
    }

    a:hover {
      filter: brightness(0.8);
    }
  }
`

export const Separator = styled.div`
  font-size: 0.875rem;
  color: var(--gray-medium);
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  &::before {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--gray-medium);
    margin-right: 1rem;
  }

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--gray-medium);
    margin-left: 1rem;
  }
`

export const GoogleButton = styled.button`
  margin-top: 4rem;
  height: 3.125rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: var(--red);
  color: var(--white);
  transition: filter .2s;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  cursor: pointer;
  border: 0;

  div {
    margin-right: 1rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`