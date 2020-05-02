import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { getSelectList } from '../utility.js'

import MethodsTable from '../component/Table/MethodsTable.jsx'
import TitleBar from '../component/TitleBar/TitleBar.jsx'

const MethodsPage = ({ MethodList, title }) => {
  const typeList = getSelectList(MethodList)
  const [type, setType] = useState(typeList[0])
  const [changeValue, setChangeValue] = useState('None')
  const [search,setSearch]=useState("")
  return (
    <>
      <TitleBar
        title={title}
        type={type}
        typeList={typeList}
        changeValue={changeValue}
        setType={setType}
        setChangeValue={setChangeValue}
        search={search}
        setSearch={setSearch}
      />
      <Row>
        <MethodsTable data={MethodList} type={type} changeValue={changeValue} search={search}/>
      </Row>
    </>
  )
}

export default MethodsPage
