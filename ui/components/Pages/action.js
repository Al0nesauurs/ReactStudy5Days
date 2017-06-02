// actions/page.js

// ฟังก์ชันนี้มีหน้าที่สร้างอ็อบเจ็กต์ที่เป็นตัวแทนของ action
// มันจึงเป็น action creator
// เมื่อเรากดปุ่ม reload pages หรือเมื่อหน้า Index ของวิกิแสดงผล
// คอมโพแนนท์ containers/Pages/Index.js จะเรียก action creator ตัวนี้
// เพื่อทำการสร้าง action ที่มีชนิดเป็น LOAD_PAGES_SUCCESS
// พร้อมกับก้อนข้อมูลของ wiki pages
export const loadPages = () => ({
  type: 'RECEIVE_PAGES',
  pages: [
    {
      "id": 1,
      "title": "test page1",
      "content": "TEST PAGE CONTENT"
    }, {
      "id": 2,
      "title": "test page#2",
      "content": "TEST PAGE CONTENT"
    }
  ]
})

export const 