import React from 'react'
import { Row, Col, DropdownButton, Dropdown } from 'react-bootstrap'

const changeValueList = ['None', 'Yes', 'No']

const SelectBox = ({ typeList = ['None'], type, setType, changeValue, setChangeValue }) => {
  const typeHandler = str => {
    setType(str)
  }
  const changeValueHandler = str => {
    setChangeValue(str)
  }

  return (
    <Col md={5}>
      <Row className='justify-content-around'>
        <Row className="align-items-center">
          <h4 className='mr-2 mb-0'>回傳型別</h4>
          <DropdownButton title={type}>
            {typeList.map(s => (
              <Dropdown.Item key={s} onClick={() => typeHandler(s)}>
                {s}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Row>
        <Row className="align-items-center">
          <h4 className='mr-2 mb-0'>原始值更動</h4>
          <DropdownButton title={changeValue}>
            {changeValueList.map(s => (
              <Dropdown.Item key={s} onClick={() => changeValueHandler(s)}>
                {s}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Row>
      </Row>
    </Col>
  )
}

export default SelectBox
