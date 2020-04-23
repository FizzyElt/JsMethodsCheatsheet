import React from 'react'
import { Table } from 'react-bootstrap'

const MethodsTable = ({ data, type, changeValue }) => {
  const filterData = data.filter(o => {
    let typeBool = true
    let valueBool = true
    if (changeValue !== 'None') {
      if (changeValue === 'Yes') {
        valueBool = o.isChangeValue === true
      } else if (changeValue === 'No') {
        valueBool = o.isChangeValue === false
      }
    }
    if (type !== 'None') {
      typeBool = type === o.returnType
    }
    return typeBool && valueBool
  })
  console.log(filterData)
  return (
    <Table hover bordered variant='dark'>
      <thead>
        <tr>
          <th style={{ width: '20%' }}>方法名稱</th>
          <th style={{ width: '30%' }}>方法說明</th>
          <th>回傳型別</th>
          <th>是否更動原始值</th>
          <th>參數</th>
        </tr>
      </thead>
      <tbody>
        {filterData.map(o => (
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
      </tbody>
    </Table>
  )
}

export default MethodsTable
