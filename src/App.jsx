import React from 'react'
import { Route } from 'react-router-dom'
import Header from './component/Header/Header.jsx'
import { routes } from './routes.js'
import { CSSTransition } from 'react-transition-group'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <div>
      <Header />
      <Container className='pt-4 pb-4 position-relative'>
        {routes.map(({ path, View }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition in={match !== null} timeout={400} classNames='page-fade' unmountOnExit>
                <Container className="page">
                  <View />
                </Container>
              </CSSTransition>
            )}
          </Route>
        ))}
      </Container>
    </div>
  )
}

export default App
