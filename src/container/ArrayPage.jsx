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
        <MethodsTable>
          {arrayList.map(o => (
            <tr key={o.name}>
              <td>
                <a target='_blank' href={o.mdnLink} className='text-light'>
                  {o.name}
                </a>
              </td>
              <td>{o.explanation}</td>
              <td>{o.returnType}</td>
              <td>{o.isChangeValue ? 'Yes' : 'No'}</td>
              <td>{o.parameter}</td>
            </tr>
          ))}
        </MethodsTable>
      </Row>
    </>
  )
}

export default ArrayPage
