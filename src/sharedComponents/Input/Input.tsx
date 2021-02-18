import React from 'react'
import { ErrorMessage, Field } from 'formik'

const ErrorText: React.FC<unknown> = ({ children }) => {
  return <div className="error-validation">{children}</div>
}

export type InputProps<T> =
  & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLInputElement>, HTMLInputElement> 
  & {
    label: string
    name: keyof T
  }

export const Input = <T extends unknown>({ label, ...restProps }: React.PropsWithChildren<InputProps<T>>) => { 
  
  return (
    <div className="formik-input">
      <label htmlFor="firstName">{label}</label>
      <Field {...restProps} type="text" />
      <ErrorMessage name={restProps.name!} component={ErrorText} />
    </div>
  )
}
