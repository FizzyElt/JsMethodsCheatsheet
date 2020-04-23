import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import MethodsTable from '../component/Table/MethodsTable.jsx'
import TitleBar from '../component/TitleBar/TitleBar.jsx'
import arrayList from '../Pagedata/ArrayData.js'
import { getSelectList } from '../utility.js'

const ArrayPage = () => {
  const typeList = getSelectList(arrayList)
  const [type, setType] = useState(typeList[0])
  const [changeValue, setChangeValue] = useState('None')
  return (
    <>
      <TitleBar
        title='Array Methods'
        type={type}
        typeList={typeList}
        changeValue={changeValue}
        setType={setType}
        setChangeValue={setChangeValue}
      />
      <Row>
        <MethodsTable data={arrayList} type={type} changeValue={changeValue}/>
      </Row>
    </>
  )
}

export default ArrayPage
