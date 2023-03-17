import {GET_ALL_POSTS, GET_POST_BY_ID, SEARCH_POSTS, UPDATE_SEARCH} from "./action-types.js"
import axios from "axios"

export function getAllPosts(){
   return async function(dispatch){
    const response = await axios.get("/publications/all")
    return dispatch({
        type: GET_ALL_POSTS,
        payload: response.data
    })
   }
}

export function searchPosts(title){
    return async function(dispatch){
        const response = await axios.get(`/publications?title=${title}`)
        console.log(title);
        return dispatch({
            type: SEARCH_POSTS,
            payload: response.data
        })
    }
}

export function updateSearch(title){
    return {
        type: UPDATE_SEARCH,
        payload: title
    }
}