import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quiz: [
        {
            id: '218930218048',
            name: 'Math Quiz',
            questionsNumber: 2,
            questions: [
                {
                    number: 1,
                    question: '1+1',
                    answers: [
                        {
                            answer: '1',
                            right: false,
                        },
                        {
                            answer: '2',
                            right: true,
                        },
                        {
                            answer: '3',
                            right: false,
                        },
                        {
                            answer: '4',
                            right: false,
                        }
                    ]
                },
                {
                    number: 2,
                    question: '1+2',
                    answers: [
                        {
                            answer: '1',
                            right: false,
                        },
                        {
                            answer: '2',
                            right: false,
                        },
                        {
                            answer: '3',
                            right: true,
                        },
                        {
                            answer: '4',
                            right: false,
                        }
                    ]
                }
            ]
        }
    ]
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {}
})

const {reducer} = quizSlice
export { reducer }