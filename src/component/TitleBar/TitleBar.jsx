import React from 'react'
import PropTypes from 'prop-types'
import SelectBox from '../SelectBox/SelectBox.jsx'
import { Row, Col } from 'react-bootstrap'

const TitleBar = ({ title, typeList, setType, setChangeValue, type, changeValue, search, setSearch }) => {
  return (
    <Row className='mb-4'>
      <Col>
        <h2 className='mb-0'>{title}</h2>
      </Col>
      <SelectBox
        typeList={typeList}
        setType={setType}
        setChangeValue={setChangeValue}
        type={type}
        changeValue={changeValue}
        search={search}
        setSearch={setSearch}
      />
    </Row>
  )
}

TitleBar.propTypes = {
  title: PropTypes.string,
  typeList: PropTypes.array,
  setType: PropTypes.func,
  setChangeValue: PropTypes.func,
  type: PropTypes.string,
  changeValue: PropTypes.string,
  search: PropTypes.string,
  setSearch: PropTypes.func,
}

export default TitleBar
