import { GiTerror } from 'react-icons/gi'

import './Error.scss'

interface ErrorProps {
    msg: string | null
}

const Error: React.FC<ErrorProps> = ({ msg }) => {
    return (
        <div className="search-error">
            <div className="search-error__icon">
                <GiTerror />
            </div>
            <h3 className="search-error__msg">{msg}</h3>
        </div>
    )
}

export default Error
