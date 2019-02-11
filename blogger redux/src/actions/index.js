import * as api from '../API/BloggerAPI'

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_POST = 'ADD_POST';
export const GET_POSTS = 'GET_POSTS';

export const getCategories = () => {
    return(dispatch)=>{
        api.getCategories()
        .then(Categories=>{
            dispatch({
                type: GET_CATEGORIES,
                payload: Categories
            })
        })
        .catch(err=>{
            console.log('Add Post Failed');
            console.log('Error: ', err);
        })
    }
}

export const addPost = (post) => {
    return (dispatch) => {
        api.addPost(post)
        .then((post)=>{
            dispatch({
                type: ADD_POST,
                payload: post
            })
        })
        .catch(err=>{
            console.log('Add Post Failed');
            console.log('Error: ', err);
        })
    }
}

export const GetPosts = () => {
    return(dispatch)=>{
        api.getPosts()
    .then(posts=>{
        dispatch({
            type: GET_POSTS,
            payload: posts
        })
    })
    .catch(err=>{
        console.log('Add Post Failed');
        console.log('Error: ', err);
    })
    }
}