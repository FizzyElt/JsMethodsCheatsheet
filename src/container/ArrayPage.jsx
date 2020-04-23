import React from 'react'
import { Row } from 'react-bootstrap'
import MethodsTable from '../component/Table/MethodsTable.jsx'
import arrayList from '../Pagedata/ArrayData.js'

const ArrayPage = () => {
  return (
    <>
      <Row>
        <h2>Array Methods</h2>
      </Row>
      <Row>
        <MethodsTable data={arrayList}/>
      </Row>
    </>
  )
}

export default ArrayPage
