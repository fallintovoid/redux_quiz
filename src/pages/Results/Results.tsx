import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { resetCurrentQuestionsNumber, resetScore } from '../../app/slices/userSlice'
import Button from '../../ui/Button'

type Props = {}

const Results = (props: Props) => {
    const { userScore, currentQuestionsNumber } = useAppSelector(state => state.userReducer)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const resetUserStore = () => {
        dispatch(resetScore())
        dispatch(resetCurrentQuestionsNumber())
        navigate('/')
    }

    return (
        <div className='flex h-screen flex-col justify-center items-center py-4'>
            <h1 className='font-bold text-3xl'>
                You have played this quiz!
            </h1>
            <div className='mt-7 w-60 h-60 bg-purple-200 rounded-full flex justify-center items-center'>
                <h1>
                    <span className='font-bold text-6xl'>
                        {userScore}
                    </span>
                    <span className='text-gray-500 text-2xl'>
                        /{currentQuestionsNumber}
                    </span>
                </h1>
            </div>
            <Button children='Go to Homepage' onClick={resetUserStore}/>
        </div>
    )
}

export default Results