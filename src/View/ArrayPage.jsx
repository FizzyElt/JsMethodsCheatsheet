import React from 'react'
import MethodsPage from '../container/MethodsPage.jsx'
import arrayList from '../PageData/ArrayData.js'

const ArrayPage = () => {
  return <MethodsPage MethodList={arrayList} title='Array' />
}

export default ArrayPage
