import { ReactNode } from 'react'
import cx from 'classnames'

import { UserInfo } from '../../styles'
import { QuestionCard } from './styles'

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <QuestionCard className={cx(
      'question',
      { answered: isAnswered },
      { highlighted: isHighlighted }
    )}>
      <p>{content}</p>
      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>
          {children}
        </div>
      </footer>
    </QuestionCard>
  )
}