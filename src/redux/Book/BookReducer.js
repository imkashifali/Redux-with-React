import {Buy_Book} from './BookType'
const initailState = {
    numberofBook:17
}

const bookReducer = (state=initailState, action) => {
        switch (action.type){
            case Buy_Book:return{
                ...state,
                numberofBook:state.numberofBook - 1
            }
            default: return state;
        }
}
export default bookReducer;