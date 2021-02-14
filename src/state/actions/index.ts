import { ActionType } from '../action-types'

interface SearchRequestAction {
    type: ActionType.SEARCH_GITHUB_REQUEST
}

interface SearchRequestScrollAction {
    type: ActionType.SEARCH_GITHUB_REQUEST_SCROLL
}

interface SearchSuccessAction {
    type: ActionType.SEARCH_GITHUB_SUCCESS
    payload: any[]
}

interface SearchSuccessScrollAction {
    type: ActionType.SEARCH_GITHUB_SUCCESS_SCROLL
    payload: any[]
}

interface SearchErrorAction {
    type: ActionType.SEARCH_GITHUB_ERROR
    payload: string
}

export type Action = SearchRequestAction | SearchRequestScrollAction | SearchSuccessAction | SearchSuccessScrollAction | SearchErrorAction
