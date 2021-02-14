import './SearchResults.scss'

interface SearchResultsProps {
    term: string
    data: any[]
}

const SearchResults: React.FC<SearchResultsProps> = ({ term, data }) => {
    return (
        <>
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

                    {term === 'issues' &&
                        data.map((item) => (
                            <div className="results__item" key={item.id}>
                                <h3 className="results__item-title">{item.title}</h3>
                                <ul className="results__item-list">
                                    <li className="results__item-owner">
                                        <span>by: </span>
                                        <a href={item.user && item.user.html_url} className="results__item-owner-link" target="_blank" rel="noopener noreferrer">
                                            <div className="results__item-owner-avatar">{item.user && <img src={item.user.avatar_url} alt={item.user.login} />} </div>
                                            {item.user && item.user.login}
                                        </a>
                                    </li>
                                    <li>
                                        <span>State: </span> {item.state}
                                    </li>
                                    <li>
                                        <span>Comments: </span> {item.comments}
                                    </li>
                                    <li>
                                        <span>Author Association: </span> {item.author_association}
                                    </li>
                                    <li>
                                        <span>Created At: </span> {item.created_at}
                                    </li>
                                    <li>
                                        <span>Updated At: </span> {item.updated_at}
                                    </li>
                                </ul>
                                <a href={item.html_url} className="results__item-link" target="_blank" rel="noopener noreferrer">
                                    Github Issue
                                </a>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default SearchResults
