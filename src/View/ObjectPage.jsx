import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import MethodsTable from '../component/Table/MethodsTable.jsx'
import TitleBar from '../component/TitleBar/TitleBar.jsx'
import objectList from '../Pagedata/ObjectData.js'
import { getSelectList } from '../utility.js'

const ObjectPage = () => {
  const typeList = getSelectList(objectList)
  const [type, setType] = useState(typeList[0])
  const [changeValue, setChangeValue] = useState('None')
  return (
    <>
      <TitleBar
        title='Object Methods'
        type={type}
        typeList={typeList}
        changeValue={changeValue}
        setType={setType}
        setChangeValue={setChangeValue}
      />
      <Row>
        <MethodsTable data={objectList} type={type} changeValue={changeValue} />
      </Row>
    </>
  )
}

export default ObjectPage
