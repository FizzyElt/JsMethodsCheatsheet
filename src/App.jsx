import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ArrayPage from './View/ArrayPage.jsx'
import ObjectPage from './View/ObjectPage.jsx'
import Home from './View/Home.jsx'
import MathPage from './View/MathPage.jsx'
import Header from './component/Header/Header.jsx'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <div>
      <Header />
      <Container className="pt-4 pb-4" fluid="md">
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
          <Route path='/Math'>
            <MathPage />
          </Route>
        </Switch>
      </Container>
    </div>
  )
}

export default App
