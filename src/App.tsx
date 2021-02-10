import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './state'
import Home from './pages/Home'

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/" component={Home} exact />
                    </Switch>
                </Router>
            </Provider>
        </div>
    )
}

export default App
