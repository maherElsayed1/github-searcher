import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'

const githubToken = '0d5faea5e143d3fe830c28a8cf1430a9916c9629'

export const searchGithub = (term: string, query: string, requestPage: number, cancel: any) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_GITHUB_REQUEST,
        })

        try {
            const { data } = await axios.get(`https://api.github.com/search/${term}`, {
                headers: {
                    Authorization: `token ${githubToken}`,
                },
                cancelToken: cancel,
                params: {
                    q: query,
                    per_page: 30,
                    page: requestPage,
                },
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

export const searchGithubScroll = (term: string, query: string, requestPage: number) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_GITHUB_REQUEST_SCROLL,
        })

        try {
            const { data } = await axios.get(`https://api.github.com/search/${term}`, {
                headers: {
                    Authorization: `token ${githubToken}`,
                },
                params: {
                    q: query,
                    per_page: 30,
                    page: requestPage,
                },
            })
            dispatch({
                type: ActionType.SEARCH_GITHUB_SUCCESS_SCROLL,
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
