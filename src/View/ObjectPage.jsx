import React from 'react'
import MethodsPage from '../container/MethodsPage.jsx'
import objectList from '../PageData/ObjectData.js'

const MathPage = () => {
  return <MethodsPage MethodList={objectList} title='Object' />
}

export default MathPage