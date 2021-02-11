import './SearchResults.scss'

interface SearchResultsProps {
    query: string
    term: string
    loading: boolean
    data: any[]
    error: string | null
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, term, loading, data, error }) => {
    return (
        <>
            {!error && !loading && query.length >= 3 && (
                <div className="results-wrapper">
                    <div className="results">
                        {term === 'users' &&
                            data.map((item) => (
                                <div className="results__item" key={item.id}>
                                    <div className="results__item-avatar">
                                        <img src={item.avatar_url} alt={item.login} />
                                    </div>
                                    <h3 className="results__item-title">@{item.login}</h3>
                                    <a href={item.html_url} className="results__item-link" target="_blank" rel="noopener noreferrer">
                                        Github Profile
                                    </a>
                                </div>
                            ))}

                        {term === 'repositories' &&
                            data.map((item) => (
                                <div className="results__item" key={item.id}>
                                    <h3 className="results__item-title">{item.full_name}</h3>
                                    <ul className="results__item-list">
                                        <li className="results__item-owner">
                                            <span>owner: </span>
                                            <a href={item.owner && item.owner.html_url} className="results__item-owner-link" target="_blank" rel="noopener noreferrer">
                                                <div className="results__item-owner-avatar">{item.owner && <img src={item.owner.avatar_url} alt={item.owner.login} />} </div>
                                                {item.owner && item.owner.login}
                                            </a>
                                        </li>
                                        <li>
                                            <span>Description: </span> {item.description}
                                        </li>
                                        <li>
                                            <span>Language: </span> {item.language}
                                        </li>
                                        <li>
                                            <span>Forks: </span> {item.forks}
                                        </li>
                                        <li>
                                            <span>Open Issues: </span> {item.open_issues}
                                        </li>
                                    </ul>
                                    <a href={item.html_url} className="results__item-link" target="_blank" rel="noopener noreferrer">
                                        Github Repository
                                    </a>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default SearchResults
