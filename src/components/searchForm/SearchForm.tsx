import { useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

// icons
import { AiOutlineGithub } from 'react-icons/ai'

// styles
import './SearchForm.scss'

const SearchForm: React.FC = () => {
    const [term, setTerm] = useState('users')
    const [query, setQuery] = useState('')

    const { searchGithub } = useActions()
    const { data, error, loading } = useTypedSelector((state) => state.search)

    useEffect(() => {
        console.log(term, query)
        if (query.length < 3) {
            return
        }
        searchGithub(term, query)
    }, [term, query])

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (query.length < 3) {
            return alert('please enter at least 3 characters!')
        }
    }

    return (
        <div className="container search-page">
            <div className="search-form">
                <div className="search-form__header">
                    <div className="search-form__header-icon">
                        <AiOutlineGithub />
                    </div>
                    <div className="search-form__header-content">
                        <h1>Github Searcher</h1>
                        <p>Search Users or repositories below</p>
                    </div>
                </div>

                <div className="search-form__content">
                    <form onSubmit={onSubmit}>
                        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Start typing to search .." />
                        <select onChange={(e) => setTerm(e.target.value)}>
                            <option value="users">Users</option>
                            <option value="repositories">Repositories</option>
                            <option value="issues">Issues</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchForm
