import { ReactComponent as LoadingIcon } from '../assets/images/loading.svg'

import './Loading.scss'

const Loading: React.FC = () => {
    return (
        <div className="loading">
            <div className="loading__icon">
                <LoadingIcon />
            </div>
        </div>
    )
}

export default Loading
