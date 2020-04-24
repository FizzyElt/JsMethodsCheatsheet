
import ArrayPage from './View/ArrayPage.jsx'
import Home from './View/Home.jsx'
import MathPage from './View/MathPage.jsx'
import ObjectPage from './View/ObjectPage.jsx'

export const routes = [
  {
    name: 'Home',
    path: '/',
    View: Home,
  },
  {
    name: 'Array',
    path: '/Array',
    View: ArrayPage,
  },
  {
    name: 'Object',
    path: '/Object',
    View: ObjectPage,
  },
  {
    name: 'Math',
    path: '/Math',
    View: MathPage,
  },
]
