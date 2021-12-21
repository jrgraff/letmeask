import { ButtonHTMLAttributes } from 'react'

import { DefaultButton } from "./styles"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <DefaultButton
      className={`${isOutlined ? 'outlined' : ''}`} 
      {...props} 
    />
  )
}