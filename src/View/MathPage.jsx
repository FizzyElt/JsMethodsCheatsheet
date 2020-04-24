import React from 'react'
import MethodsPage from '../container/MethodsPage.jsx'
import mathList from '../Pagedata/MathData.js'

const MathPage = () => {
  return <MethodsPage MethodList={mathList} title='Math' />
}

export default MathPage