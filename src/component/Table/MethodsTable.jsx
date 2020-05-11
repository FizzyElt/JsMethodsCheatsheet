import React from 'react'
import { Table } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'
import { useTransition, animated } from 'react-spring'

const MethodsTable = ({ data, type, changeValue, search }) => {
  let filterData = data.filter(o => {
    let typeBool = true
    let valueBool = true
    let nameBool = true
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
    if (search !== '') {
      nameBool = o.name.toLowerCase().includes(search.toLowerCase())
    }
    return typeBool && valueBool && nameBool
  })

  return (
    <Table bordered variant="dark" hover>
      <thead>
        <tr>
          <th style={{ width: '20%' }}>方法名稱</th>
          <th style={{ width: '30%' }}>方法說明</th>
          <th style={{ width: '8%' }}>回傳型別</th>
          <th style={{ width: '8%' }}>是否更動原始值</th>
          <th>參數</th>
        </tr>
      </thead>
      <tbody>
        {filterData.map( item => (
          <tr>
            <td>
              <a target='_blank' rel='noopener noreferrer' href={item.mdnLink} className='text-light'>
                {item.name}
              </a>
            </td>
            <td>{item.explanation}</td>
            <td className='text-center'>{item.returnType}</td>
            <td className='text-center'>{item.isChangeValue ? 'Yes' : 'No'}</td>
            <td>{item.parameter}</td>
            </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default MethodsTable
