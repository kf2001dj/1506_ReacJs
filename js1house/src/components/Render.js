import React, { Component } from "react";

export default class RenderCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowNotification: false
    };
  }
  render() {
 
    const {isShowNotification} = this.state
 
    return (
      <div style={{margin: 20}}>
        <p>Code Render ReactJS</p>
        <button onClick = {() => {
          //Cập nhật lại state
          this.setState({
            isShowNotification: !isShowNotification
          })
        }}>{isShowNotification ? 'Hiển thị' : 'Ẩn'}</button>
 
        {/* Gọi component Notification */}
        <Notification isShow = {isShowNotification}/>
      </div>
    );
  }
}

const Notification = (props) => {
  //Kiểm tra giá trị của props
  if(props.isShow) {
    //Trả về JSX để hiển thị
    return (
        <ul>
          <li>Thông báo 1 : Học code reactjs</li>
          <li>Thông báo 2 : Học code React Native</li>
        </ul>
    )
  }else{
    //Trả về null để ẩn
    return null
  }
}
