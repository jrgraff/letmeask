import styled from "styled-components";

export const QuestionCard = styled.div`
  background: var(--white);
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  border: 1px solid transparent;
  width: 100%;

  &.answered {
    background: var(--white);
    opacity: 0.4;
  }

  &.highlighted {
    background: var(--box-background);
    border: 1px solid var(--purple);

    .userInfo > span {
      color: var(--black);
    }
  }

  & + .question {
    margin-top: 0.5rem;
  }

  p {
    color: var(--black);
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    div:last-child {
      display: flex;
      gap: 1rem;
    }

    .userInfo {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 0.5rem;
        color: var(--gray-dark);
        font: 400 0.875rem "Roboto", sans-serif;
      }
    }

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
    }
`