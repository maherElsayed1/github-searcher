import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'

export const searchGithub = (term: string, query: string, cancel: any) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_GITHUB_REQUEST,
        })

        try {
            const { data } = await axios.get(`https://api.github.com/search/${term}?q=${query}`, {
                headers: {
                    Authorization: `token ${'0d5faea5e143d3fe830c28a8cf1430a9916c9629'}`,
                },
                cancelToken: cancel,
            })
            dispatch({
                type: ActionType.SEARCH_GITHUB_SUCCESS,
                payload: data.items,
            })
        } catch (err) {
            if (axios.isCancel(err)) {
                console.log(err.message)
            } else {
                dispatch({
                    type: ActionType.SEARCH_GITHUB_ERROR,
                    payload: err.message,
                })
            }
        }
    }
}
