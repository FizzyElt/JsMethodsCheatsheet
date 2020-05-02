import React from 'react'
import { Row, Col, DropdownButton, Dropdown } from 'react-bootstrap'

const changeValueList = ['None', 'Yes', 'No']

const SelectBox = ({ typeList = ['None'], type, setType, changeValue, setChangeValue, search, setSearch }) => {
  const typeHandler = str => {
    setType(str)
  }
  const changeValueHandler = str => {
    setChangeValue(str)
  }
  const changeSearchHandler = e => {
    let value = e.target.value
    setSearch(value)
  }
  return (
    <Col md={7}>
      <Row className='justify-content-around'>
        <Row className='align-items-center'>
          <h4 className='mr-2 mb-0'>搜尋</h4>
          <input type='text' className='w-75' onChange={changeSearchHandler} value={search} />
        </Row>
        <Row className='align-items-center'>
          <h4 className='mr-2 mb-0'>回傳型別</h4>
          <DropdownButton title={type}>
            {typeList.map(s => (
              <Dropdown.Item key={s} onClick={() => typeHandler(s)}>
                {s}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Row>
        <Row className='align-items-center'>
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
