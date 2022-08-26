import React from 'react'
import { useAppSelector } from '../../hooks/reduxHook'
import { Link } from 'react-router-dom'
import QuizItem from '../../ui/QuizItem'

type Props = {}

const Home = (props: Props) => {

    const quiz = useAppSelector(state => state.quizReducer.quiz)

    const renderQuiz = (quizes: any[]) => {
        return quizes.map((item: any) => {
            return (
                <Link to={`quiz/${item.id}`}>
                    <QuizItem id={item.id} name={item.name} questionsNumber={item.questionsNumber}/>
                </Link>
            )
        })
    }

    return (
        <div className='w-full'>
            <div className='w-full bg-purple-400 py-10 flex flex-col px-8 text-white'>
                <h1 className='text-2xl font-bold'>Lets play</h1>
                <h2 className='mt-2 text-lg font-semibold'>And be the first!</h2>
            </div>

            <div className='pt-6 px-8 w-full min-h-screen bg-gray-100'>
                <h2 className='font-semibold text-xl'>Your Quiz</h2>
                {renderQuiz(quiz)}
            </div>
        </div>
    )
}

export default Home