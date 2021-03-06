import { useEffect, useState } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

// component
import SearchResults from '../searchResults/SearchResults'
import Loading from '../loading/Loading'
import Error from '../error/Error'

// icons
import { AiOutlineGithub } from 'react-icons/ai'

// styles
import './SearchForm.scss'

const SearchForm: React.FC = () => {
    const [term, setTerm] = useState('users')
    const [query, setQuery] = useState('')
    const [requestPage, setRequestPage] = useState(1)

    const { searchGithub, searchGithubScroll } = useActions()
    const { data, error, loading } = useTypedSelector((state) => state.search)

    useEffect(() => {
        const cancelToken = axios.CancelToken
        const source = cancelToken.source()
        const cancel = source.token

        if (query.length < 3) {
            return
        }
        setRequestPage(1)
        searchGithub(term, query, requestPage, cancel)
        return () => source.cancel('Request canceled!')
    }, [term, query])

    useEffect(() => {
        if (requestPage > 1) {
            searchGithubScroll(term, query, requestPage)
        }
    }, [requestPage])

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (query.length < 3) {
            return alert('please enter at least 3 characters!')
        }
    }

    const handleInfiniteScroll = () => {
        if (query.length < 3) {
            return
        }
        setRequestPage(requestPage + 1)
    }

    const handleTermChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTerm(e.target.value)
        setRequestPage(1)
    }

    return (
        <div className="container search-page">
            <div className={`search-form ${loading || error || query.length >= 3 ? 'align-start' : ''}`}>
                <div className="search-form__header">
                    <div className="search-form__header-icon">
                        <AiOutlineGithub />
                    </div>
                    <div className="search-form__header-content">
                        <h1 className="search-form__header-title">Github Searcher</h1>
                        <p className="search-form__header-description">Search Users or repositories below</p>
                    </div>
                </div>

                <div className="search-form__content">
                    <form onSubmit={onSubmit}>
                        <input type="search" className="search-form__search-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Start typing to search .." />
                        <select className="search-form__search-term" onChange={handleTermChange}>
                            <option value="users">Users</option>
                            <option value="repositories">Repositories</option>
                            <option value="issues">Issues</option>
                        </select>
                    </form>
                </div>
            </div>

            {loading && <Loading />}

            {!error && !loading && query.length >= 3 && data.length >= 1 && (
                <InfiniteScroll dataLength={data.length} next={handleInfiniteScroll} hasMore={true} loader={null}>
                    <SearchResults term={term} data={data} />
                </InfiniteScroll>
            )}

            {error && <Error msg={error} />}

            {!error && !loading && query.length >= 3 && !data.length && <Error msg="Try to enter another search keyword!" />}
        </div>
    )
}

export default SearchForm
