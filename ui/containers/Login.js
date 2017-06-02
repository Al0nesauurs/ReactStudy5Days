import React, { Component, PropTypes } from 'react'
// import connect เข้ามาก่อนครับ
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { submitLogin } from '../../actions/page'
import { Login } from '../../components'

class LoginContainer extends Component {
  // เอาโค๊ดตรงนี้ออกไปได้เลย
  // ตอนนี้ state ของเราบรรจุเข้า store แทนแล้ว
  // state = {
  //  login: []
  // }
  
  static propTypes = {
    login: PropTypes.array.isRequired,
    onLogin: PropTypes.func.isRequired
  }

  // เมื่อ state อัพเดท ฟังก์ชัน mapStateToProps ด้านล่างจะทำงาน
  // สิ่งที่ return ออกมาจากฟังก์ชันนี้จะกลายเป็น props ของคอมโพแนนท์
  shouldComponentUpdate(nextProps) {
    // ดังนั้นเราจึงตรวจสอบ login ผ่าน props แทน state
    // อย่าสับสนนะครับ state ที่พูดถึงตรงนี้คือ this.state หรือสถานะของคอมโพแนนท์
    // ไม่ใช่สถานะของแอพพลิเคชันนะ
    return this.props.login !== nextProps.login;
  }

  onReLogin = () => {
    // submitLogin ตัวนี้เป็น props ที่ได้มาจากค่าที่ mapDispatchToProps ส่งออกมา
    // เมื่อเราเรียกฟังก์ชันนี้ มันจะ dispatch ก้อนอ็อบเจ็กต์ของ action ไปให้ reducer
    // ดู mapDispatchToProps ด้านล่างประกอบ
    this.props.onLogin()
    // fetch(PAGES_ENDPOINT)
    //   .then((response) => response.json())
    //   .then((login) => this.setState({ login }))
  }

  componentDidMount() {
    this.onReLogin()
  }

  render() {
    return (
      <Pages
        login={this.props.login}
        onReLogin={this.onReLogin} />
    )
  }
}

// state ในที่นี้หมายถึงสถานะของแอพพลิเคชันที่เก็บอยู่ใน store/
const mapStateToProps = (state) => ({
  // เมื่อ state ใน store มีการเปลี่ยนแปลง
  // เราไม่สนใจทุก state
  // เราสนใจแค่ state ของ login
  // โดยทำการติดตั้ง login ให้เป็น props
  // เราใช้ชื่อ key ของ object เป็นอะไร
  // key ตัวนั้นจะเป็นชื่อที่เรียกได้จาก props ของคอมโพแนนท์
  login: state.login
})

// ส่ง dispatch ของ store เข้าไปให้เรียกใช้
// อยาก dispatch อะไรไปให้ reducer ก็สอยเอาตามปรารถนาเลยครับ
const mapDispatchToProps = (dispatch) => ({
  onLogin() {
    // เมื่อเรียก this.props.onLogin
    // submitLogin ที่เป็น action creator จะโดนปลุกขึ้นมาทำงาน
    // จากนั้นจะ return ก้อนอ็อบเจ็กต์ของ action
    // ส่งเข้าไปใน dispatch
    // store.dispatch จะไปปลุก reducer ให้มาจัดการกับ action ที่เกี่ยวข้อง
    dispatch(submitLogin())
  }
})

// วิธีใช้ connect สังเกตนะครับส่งสองฟังก์ชันคือ
// mapStateToProps และ mapDispatchToProps เข้าไปใน connect
// จะได้ฟังก์ชันใหม่ return กลับมา
// แล้วเราก็ส่ง LoginContainer ที่เป้นคอมโพแนนท์ที่ต้องการเชื่อมต่อกับ store
// เข้าไปในฟังก์ชันใหม่นี้อีกที
// มันคือ Higher-order function นั่นเอง
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)