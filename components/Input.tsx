 

import classNames from "classnames"
import { HTMLProps, useId } from "react"

type InputProps = HTMLProps<HTMLInputElement> & {
  wrapperClassName?: string
}

export default function Input(props: InputProps) {
  const { className, id, placeholder, wrapperClassName, ...otherProps } = props
  const inputId = useId()

  return (
    <div className={classNames("relative", wrapperClassName)}>
      <input
        placeholder={placeholder}
        className={classNames("block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-paprika-900 peer", className)}
        id={id || inputId}
        {...otherProps}
      />
      <label htmlFor={inputId} className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-paprika-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{placeholder}</label>
    </div>
  )
}