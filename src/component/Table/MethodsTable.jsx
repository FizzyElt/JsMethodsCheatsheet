import React from 'react'
import { Table } from 'react-bootstrap'

const MethodsTable = ({ children }) => {
  return (
    <Table hover bordered variant="dark">
      <thead >
        <tr>
          <th>方法名稱</th>
          <th>回傳型別</th>
          <th>是否更動原始值</th>
          <th>參數</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </Table>
  )
}

export default MethodsTable
