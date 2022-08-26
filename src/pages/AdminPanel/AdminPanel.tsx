import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/reduxHook'
import QuizItem from '../../ui/QuizItem'
import { FiPlusCircle } from 'react-icons/fi'
import { AiOutlineDoubleLeft } from 'react-icons/ai'

type Props = {}

const AdminPanel = (props: Props) => {
  const quizs = useAppSelector(state => state.quizReducer.quiz)

  const renderQuizs = (quisz: any[]) => {
    return quisz.map(quiz => {
      return <QuizItem id={quiz.id} name={quiz.name} questionsNumber={quiz.questionsNumber}/>
    })
  }

  return (
    <div className='w-full h-screen bg-stone-100 px-7 py-4'>
      <Link to='/'>
        <div className='flex items-center bg-purple-600 w-fit p-2 rounded-lg hover:bg-purple-400 duration-150 ease-linear'>
          <AiOutlineDoubleLeft color='white'/>
          <span className='ml-2 text-white'>Back to home</span>
        </div>
      </Link>
      <h1 className='text-lg font-semibold mt-3'>Quizes</h1>
      {renderQuizs(quizs)}
      <FiPlusCircle className='mt-5 block m-auto text-5xl hover:text-purple-600 duration-200 ease-linear cursor-pointer'/>
    </div>
  )
}

export default AdminPanel