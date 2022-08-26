import React, {ChangeEvent, useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { incrementScore, setCurrentQuestionsNumber } from '../../app/slices/userSlice'
import AnswerItem from '../../ui/AnswerItem'
import Button from '../../ui/Button'

type Props = {}

const Quiz = (props: Props) => {

    const { quizId } = useParams();
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [rightAnswer, setRightAnswer] = useState(false)
    const currentQuiz = useAppSelector(state => state.quizReducer.quiz.filter(item => item.id === quizId))[0];
    const dispatch = useAppDispatch()
    const currentAppQuestion = currentQuiz.questions[currentQuestion-1]
    const navigate = useNavigate()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, right: boolean) => {
        if (e.currentTarget.checked && right) {
            setRightAnswer(true)
        } else {
            setRightAnswer(false)
        }
    }

    useEffect(() => {
        dispatch(setCurrentQuestionsNumber(currentQuiz.questionsNumber))

        // eslint-disable-next-line
    }, [])

    const navigateToNextQuest = () => {
        if (currentQuestion === currentQuiz.questionsNumber) {
            navigate('results')
            setRightAnswer(false)
            if (rightAnswer) {
                dispatch(incrementScore())
            }
        } else {
            setCurrentQuestion(prev => prev + 1)
            setRightAnswer(false)
            if (rightAnswer) {
                dispatch(incrementScore())
            }
        }
    }

    
    const renderAnswerItems = (answers: any[]) => {
        return answers.map((answer, i) => {
            return <AnswerItem 
                id={answer.answer} 
                name={currentAppQuestion.question} 
                right={answer.right} 
                onChangeHandler={onChangeHandler}
                key={i}/>
        })
    } 


    return (
        <div className='w-full h-full'>
            <div className='w-full py-2 flex items-center justify-center' >
                <h1 className='font-semibold text-lg'>
                    {currentQuiz.name}
                </h1>
            </div>
            <div className='px-8'>
                <h2 className='font-semibold text-yellow-500'>Question {currentQuestion}/{currentQuiz.questionsNumber}</h2>
                <h1 className='font-bold text-2xl mt-2'>{currentAppQuestion.question}</h1>

                <div>
                    {renderAnswerItems(currentAppQuestion.answers)}
                </div>
                <Button children='Next' onClick={navigateToNextQuest}/>
            </div>

        </div> 
    )
}

export default Quiz