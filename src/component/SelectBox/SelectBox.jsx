import React from 'react'
import { Row, Col, DropdownButton, Dropdown } from 'react-bootstrap'

const SelectBox = ({ typeList = ['None'], type, setType, changeValue, setChangeValue }) => {
  const typeHandler = str => {
    setType(str)
  }
  const changeValueHandler = str => {
    setChangeValue(str)
  }

  return (
    <Col md={5}>
      <Row className='justify-content-around align-items-center'>
        <h4 className='mr-2'>回傳型別</h4>
        <DropdownButton title={type}>
          {typeList.map(s => (
            <Dropdown.Item onClick={() => typeHandler(s)}>{s}</Dropdown.Item>
          ))}
        </DropdownButton>
        <h4 className='mr-2'>原始值更動</h4>
        <DropdownButton title={changeValue}>
          <Dropdown.Item onClick={() => changeValueHandler('None')}>none</Dropdown.Item>
          <Dropdown.Item onClick={() => changeValueHandler('Yes')}>Yes</Dropdown.Item>
          <Dropdown.Item onClick={() => changeValueHandler('No')}>No</Dropdown.Item>
        </DropdownButton>
      </Row>
    </Col>
  )
}

export default SelectBox
