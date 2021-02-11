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
                <div className="search-results">
                    {term === 'users' &&
                        data.map((item) => (
                            <div className="results__item" key={item.id}>
                                <div className="avatar">
                                    <img src={item.avatar_url} alt="" />
                                </div>
                                <div>{item.login}</div>
                                <a href={item.html_url}>Github Profile</a>
                            </div>
                        ))}
                </div>
            )}
        </>
    )
}

export default SearchResults
