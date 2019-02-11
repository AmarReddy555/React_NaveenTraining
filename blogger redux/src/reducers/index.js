import {GET_CATEGORIES, ADD_POST, GET_POSTS} from '../actions';
import {combineReducers} from 'redux';

// const categories = [
//     {
//        "name": "React",
//        "code": "react"
//     },
//     {
//        "name": "Redux",
//        "code": "redux"
//     },
//     {
//        "name": "Angular",
//        "code": "angular"
//     },
//     {
//        "name": "ES6",
//        "code": "es6"
//     },
//     {
//        "name": "Java",
//        "code": "java"
//     },
//     {
//        "name": "ASP.NET",
//        "code": "asp.net"
//     },
//     {
//        "name": "CSharp",
//        "code": "csharp"
//     }
//  ]

const categoryReducers = (state = [], action) => {
    switch(action.type){
        case GET_CATEGORIES:
        return [...action.payload];
        default:
            return state;
    }
}

const postReducer = (state=[], action) => {
    switch(action.type){
        case ADD_POST:
            let NewState = [...state, action.payload];
            return NewState;
        case GET_POSTS:
            return [...action.payload];
        default:
            return state;
        // case UPDATE_POST:
        // case DELETE_POST:
    }
}

const appReducers = combineReducers({
    categories: categoryReducers,
    posts: postReducer
});

export default appReducers;
