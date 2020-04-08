import React from 'react'
import Home from './Home'
import Header from './Header'
import Genres from './Genres'
import Series from './Series'
import NewGenre from './NewGenre'
import NewSerie from './NewSerie'
import EditGenre from './EditGenre'
import InfoSerie from './InfoSerie'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/genres' exact component={Genres} />
          <Route path='/series' exact component={Series} />
          <Route path='/genres/new' exact component={NewGenre} />
          <Route path='/genres/:id' exact component={EditGenre} />
          <Route path='/series/new' exact component={NewSerie} />
          <Route path='/series/:id' exact component={InfoSerie} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
