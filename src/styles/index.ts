import styled from "styled-components"

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`

export const Header = styled.header`
  padding: 1.5rem;
  border-bottom: 1px solid var(--gray-light);

  @media(max-width: 520px) {
    padding: 1rem 0;
  }

  & > div {
    max-width: 70.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70vw;

    img {
      max-height: 3rem;
    }

    > div {
      display: flex;
      gap: 1rem;

      > button {
        height: 2.5rem;
      }
    }

    @media(max-width: 768px) {
      flex-direction: column;

      > div > div {
        margin-bottom: 2rem;
      }
    }
  }

  & > div > div:last-child {
    width: 100%;
    max-width: 30rem;

    @media (max-width: 768px) {
      margin-top: 1rem;
      max-width: 18rem;
      flex-direction: column;
    }
  }

  & > div > div > button:last-child {
    min-width: 10rem;
  }
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

export const HomeContent = styled.main`
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

export const RoomContent = styled.main`
  max-width: 50rem;
  margin: 0 auto;
  width: 90vw;

  > div {
    margin: 2rem 0 1.5rem;
    display: flex;
    align-items: center;
    
    @media(max-width: 520px) {
      flex-wrap: wrap;
      justify-content: space-between;
    }

    > h1 {
      font: 700 1.5rem "Poppins", sans-serif;
      color: var(--black);

      @media(max-width: 520px) {
        font-size: 1.3rem;
      }
    }

    > span {
      margin-left: 1rem;
      background: var(--pink-dark);
      border-radius: 100vw;
      padding: 0.5rem 1rem;
      color: var(--white);
      font: 500 0.875rem "Roboto", sans-serif;

      @media(max-width: 520px) {
        margin-left: 0;
      }
    }
  }

  > section {
    margin-top: 2rem;
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

export const Form = styled.form`
  > textarea {
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 0.5rem;
    background: var(--white);
    box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 8rem;
    max-height: 16rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    span {
      font: 500 0.875rem "Roboto", sans-serif;
      color: var(--gray-dark);

      button {
        background: transparent;
        border: 0;
        color: var(--purple);
        text-decoration: underline;
        font: 500 0.875rem "Roboto", sans-serif;
        cursor: pointer;
      }
    }

    @media(max-width: 425px) {
      button {
        padding: 0 1rem;
      }
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  > span {
    margin-left: 0.5rem;
    color: var(--black);
    font: 500 0.875rem "Roboto", sans-serif;
  }
`

export const LikeButton = styled.button`
  display: flex;
  align-items: flex-end;
  color: var(--gray-dark);
  gap: 0.5rem;
  transition: filter 0.2s;

  &.liked {
    color: var(--purple);

    svg path {
      stroke: var(--purple);
    }
  }

  &:hover {
    filter: brightness(0.7);
  }
`

export const CheckButton = styled.button`
  & svg path,
  & circle {
    transition: stroke 0.3s;
  }

  &:hover svg path,
  &:hover circle {
    stroke: #68d391;
  }
`

export const HighlightButton = styled.button`
  & svg path,
  & circle {
    transition: stroke 0.3s;
  }

  &:hover svg path,
  &:hover circle {
    stroke: var(--blue);
  }

  &.active svg path {
    stroke: var(--blue);
  }
`

export const QuestionsList = styled.div`
  margin-top: 32px;
  flex-direction: column;
`