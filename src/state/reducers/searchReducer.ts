import { ActionType } from '../action-types'
import { Action } from '../actions'

interface SearchState {
    loading: boolean
    error: string | null
    data: any[]
}

const initialState = {
    loading: false,
    error: null,
    data: [],
}

const searchReducer = (state: SearchState = initialState, action: Action): SearchState => {
    switch (action.type) {
        case ActionType.SEARCH_GITHUB_REQUEST:
            return { loading: true, error: null, data: [] }
        case ActionType.SEARCH_GITHUB_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionType.SEARCH_GITHUB_ERROR:
            return { loading: false, error: action.payload, data: [] }
        default:
            return state
    }
}

export default searchReducer
