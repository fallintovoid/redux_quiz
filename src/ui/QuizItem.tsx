import React, {FC} from 'react'
import { Link } from 'react-router-dom'

type Props = {
    name: string,
    id: string,
    questionsNumber: number
}

const QuizItem:FC<Props> = ({name, id, questionsNumber}) => {
  return (
    <Link to={`quiz/${id}`}>
      <div className='bg-white mt-5 w-full p-10 rounded-lg drop-shadow-md cursor-pointer hover:bg-purple-100 transition duration-100 ease-in-out'>
          <h1 className='font-semibold text-2xl '>{name}</h1>
          <p>Questions: <span className='font-medium'>{questionsNumber}</span></p>
      </div>
    </Link>
    
  )
}

export default QuizItem