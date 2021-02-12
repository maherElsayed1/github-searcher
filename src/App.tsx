import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './state'
import { PersistGate } from 'redux-persist/integration/react'
import Home from './pages/Home'

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <Switch>
                            <Route path="/" component={Home} exact />
                        </Switch>
                    </Router>
                </PersistGate>
            </Provider>
        </div>
    )
}

export default App
