import { ActionType } from '../action-types'

interface SearchRequestAction {
    type: ActionType.SEARCH_GITHUB_REQUEST
}

interface SearchSuccessAction {
    type: ActionType.SEARCH_GITHUB_SUCCESS
    payload: any[]
}

interface SearchErrorAction {
    type: ActionType.SEARCH_GITHUB_ERROR
    payload: string
}

export type Action = SearchRequestAction | SearchSuccessAction | SearchErrorAction
