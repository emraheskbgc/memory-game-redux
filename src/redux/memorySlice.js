import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";

const shuffle = () => {
    let arr = data.concat(data);
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

export const memorySlice = createSlice({
    name:"memory",
    initialState:{
        opened:[],
        matched:[],
        score:0,
        lastClicked:null,
        items:shuffle()
    },
    reducers:{
        open: (state, action) => {
            state.opened.push(action.payload);
            if(state.opened.length > 1){
                if(state.opened[0] === state.lastClicked){
                    state.matched.push(state.lastClicked);
                    state.score +=50;
                }
                else{
                    state.score -=10;
                }
                state.opened = []
            }
        },
        lastClick:(state,action) => {
            state.lastClicked = action.payload
        },
        initializeGame: (state) => {
            state.opened=[];
            state.matched=[];
            state.score=0;
            state.lastClicked = null;
            state.items = shuffle(state.items)
        }
    }
})

export const {open, lastClick, initializeGame} = memorySlice.actions;

export default memorySlice.reducer;