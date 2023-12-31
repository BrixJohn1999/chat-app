import React from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () =>(
    <Router>
        <Route path="/" exact component={JOIN} />
        <Route path="/chat" component={Chat} />
    </Router>
)

export default App;