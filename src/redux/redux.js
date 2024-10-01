import { createAction, createReducer } from "@reduxjs/toolkit";


const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM';
const SET_TEXT = 'SET_TEXT';


export const incrementnum = createAction(INCREMENT_NUM)
export const decrementNum = createAction(DECREMENT_NUM);
export const setText = createAction(SET_TEXT);


const initiallState = {
    num: 0,
    text: 'Hello World'
}

export default createReducer( initiallState, (builder)=> {
    builder
    .addCase(incrementnum, (state, action)=>{
        if(state.num < 15) state.num++
    })
    .addCase(DECREMENT_NUM, (state) =>{
        if(state.num > 0) state.num--
    })
    .addCase (SET_TEXT,(state, action) =>{
        state.text = action.payload
    })

});