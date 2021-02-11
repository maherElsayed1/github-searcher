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
                    </div>
                </div>
            )}
        </>
    )
}

export default SearchResults
