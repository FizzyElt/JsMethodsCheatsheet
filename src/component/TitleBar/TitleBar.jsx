import React from 'react'
import SelectBox from '../SelectBox/SelectBox.jsx'
import { Row, Col } from 'react-bootstrap'

const TitleBar = ({ title,typeList, setType, setChangeValue, type, changeValue ,search,setSearch}) => {
  return (
    <Row className='mb-4'>
      <Col>
        <h2 className="mb-0">{title}</h2>
      </Col>
      <SelectBox typeList={typeList} setType={setType} setChangeValue={setChangeValue} type={type} changeValue={changeValue} search={search} setSearch={setSearch}/>
    </Row>
  )
}

export default TitleBar
