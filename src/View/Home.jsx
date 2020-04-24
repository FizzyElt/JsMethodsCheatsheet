import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <Row className='mb-4'>
        <h1>JS 方法速查表</h1>
      </Row>
      <Row className='flex-column'>
        <h2>用途</h2>
        <h4 className='mb-5'>用來給有JS基礎想要快速查找JS方法的用途及參數。</h4>
        <h2>說明</h2>
        <h4 className='mb-5'>
          只有簡單的方法說明，想知道更詳細請點連結到MDN查看，每個方法都會附上MDN連結，
          <br />
          參數前方有 * 字號代表可填可不填
        </h4>
        <h2>Github連結</h2>
        <h4 className='mb-5'>
        <a href="https://github.com/FizzyElt/JsMethodsCheatsheet" target="_blank">https://github.com/FizzyElt/JsMethodsCheatsheet</a>
          <br />
          有錯誤或想法歡迎發PR給我
        </h4>
      </Row>
    </>
  )
}

export default Home
