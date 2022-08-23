import React, { useRef, useEffect } from 'react'


type Props = {
    id: number,
    name: string,
    right: boolean,
    onChangeHandler: Function
}

const AnswerItem = ({id, name, right, onChangeHandler}: Props) => {

  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current!.checked = false
  }, [name])

  return (
    <div className='w-full px-8 py-4 bg-purple-100 mt-4 rounded-md' >
        <input type='radio' id={id+''} name={name} className='text-xl accent-pink-500' onChange={(e) => onChangeHandler(e, right)} ref={ref}/>
        <label htmlFor={id+''} className='ml-4 font-semibold text-lg'>{id}</label>
    </div>
  )
}

export default AnswerItem