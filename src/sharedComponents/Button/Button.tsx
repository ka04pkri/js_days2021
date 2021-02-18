import React from 'react'
import { useHistory } from 'react-router'

import './button.scss'

export type ButtonProps =
  & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> 
  & {
    to?: string
    primmary?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined
  }

export const Button: React.FC<ButtonProps> = ({ children, primmary, className, ...restProps }) => {
  const history = useHistory()
  const classNames = [
    "button",
    primmary ? "primary" : "",
    className?.split(" ")
  ]
  .filter(cl => cl)
  .join(" ")
  

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (restProps.onClick) {
      restProps.onClick(event)
    }

    if (restProps.to) {
      history.push(restProps.to)
    }
  }

  return (
    <button {...restProps} className={classNames} onClick={handleClick}>
      {children}
    </button>
  )
}
