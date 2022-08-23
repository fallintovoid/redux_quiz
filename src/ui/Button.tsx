import React, { FC } from 'react'

type Props = {
    onClick: Function,
    children: string
}

const Button: FC<Props> = ({onClick, children}) => {
  return (
    <button onClick={() => onClick()} className="block mx-auto mt-6 bg-purple-600 py-2 px-5 rounded-lg text-white text-3xl hover:bg-purple-700 duration-150 ease-in">
        {children}
    </button>
  )
}

export default Button