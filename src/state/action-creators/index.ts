import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'

export const searchGithub = (term: string, query: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_GITHUB_REQUEST,
        })

        try {
            const { data } = await axios.get(`https://api.github.com/search/${term}?q=${query}`)
            dispatch({
                type: ActionType.SEARCH_GITHUB_SUCCESS,
                payload: data.items,
            })
        } catch (err) {
            dispatch({
                type: ActionType.SEARCH_GITHUB_ERROR,
                payload: err.message,
            })
        }
    }
}
