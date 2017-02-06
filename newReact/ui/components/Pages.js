import React, { Component, PropTypes } from 'react'
import fetch from 'isomorphic-fetch'
import Page from './Page'

export default class Pages extends Component {
  // เมื่อ Pages รับ pages มาจาก container จึงควรเพิ่ม PropTypes
  // เพื่อการันตีว่าสิ่งที่ส่งเข้ามานั้นต้องเป็นอาร์เรย์และมีค่าเสมอ
  // ตรวจสอบว่า onReloadPages ต้องเป็นฟังก์ชันหรือ callback นั่นเอง
  static propTypes = {
    pages: PropTypes.array.isRequired,
    onReloadPages: PropTypes.func.isRequired
  }
  
  // ไม่มีการดึงข้อมูลจากเซิร์ฟเวอร์อีกต่อไป
  // รู้เพียงแค่วิธีการแสดงผล
  render() {
    return (
      <table className='table'>
      <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            // ตอนนี้มันไม่รู้จัก state แล้ว
            // รู้แค่ว่ามีคนนอกคอยส่ง props เข้ามาให้
            this.props.pages.map((page) => (
              <Page
                key={page.id}
                id={page.id}
                title={page.title} />
            ))
          }
        </tbody>
      </table>
    )
  }
}