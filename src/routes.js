
import ArrayPage from './View/ArrayPage.jsx'
import Home from './View/Home.jsx'
import MathPage from './View/MathPage.jsx'
import ObjectPage from './View/ObjectPage.jsx'
import DatePage from './View/DatePage.jsx'
import StringPage from './View/StringPage.jsx'
import SetPage from './View/SetPage.jsx'
import MapPage from './View/MapPage.jsx'
import NumberPage from './View/NumberPage.jsx'

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
  {
    name: 'Date',
    path: '/Date',
    View: DatePage,
  },
  {
    name: 'String',
    path: '/String',
    View: StringPage,
  },
  {
    name: 'Set',
    path: '/Set',
    View: SetPage,
  },
  {
    name: 'Map',
    path: '/Map',
    View: MapPage,
  },
  {
    name: 'Number',
    path: '/Number',
    View: NumberPage,
  },
  
]
