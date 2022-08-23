import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userScore: 0,
    currentQuestionsNumber: 0
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        incrementScore: (state) => {
            state.userScore++
        },
        resetScore: (state) => {
            state.userScore = 0
        },
        setCurrentQuestionsNumber: (state, action) => {
            state.currentQuestionsNumber = action.payload
        },
        resetCurrentQuestionsNumber: (state) => {
            state.currentQuestionsNumber = 0
        }
    }
})

const { reducer, actions } = userSlice

export { reducer }
export const {
    incrementScore,
    resetScore,
    setCurrentQuestionsNumber,
    resetCurrentQuestionsNumber
} = actions