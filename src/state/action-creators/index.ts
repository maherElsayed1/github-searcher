import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'

const { REACT_APP_GITHUB_TOKEN } = process.env

export const searchGithub = (term: string, query: string, requestPage: number, cancel: any) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_GITHUB_REQUEST,
        })

        try {
            const { data } = await axios.get(`https://api.github.com/search/${term}`, {
                headers: {
                    Authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
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
                    Authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
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
