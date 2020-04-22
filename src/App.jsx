import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ArrayPage from './container/ArrayPage.jsx'
import ObjectPage from './container/ObjectPage.jsx'
import Home from './container/Home.jsx'
import Header from './component/Header/Header.jsx'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <div>
      <Header />
      <Container className="pt-4 pb-4">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/Array'>
            <ArrayPage />
          </Route>
          <Route path='/Object'>
            <ObjectPage />
          </Route>
        </Switch>
      </Container>
    </div>
  )
}

export default App
