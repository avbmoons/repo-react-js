import { CHECK_TEXT_ACTION } from "./constants";

const initialState={
    showText: true,
    checkText: "I am here",
}

export const profileReducer=(state=initialState,action)=>{

    switch (action.type){
        case CHECK_TEXT_ACTION:{
            return {
                ...state,
                showText: !state.showText,
            };
        }
        default:
            return state;
    }
};

