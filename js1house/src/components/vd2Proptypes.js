import React from "react";
import PropTypes from 'prop-types';
 
class vd2Proptype extends React.Component {
  render() {
     
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          <li>{this.props.type}</li>
          <li>{this.props.public_year}</li>
          <li>{this.props.storage}</li>
        </ul>
      </div>
    );
  }
}
 // Đúng kiểu dữ liệu
vd2Proptype.defaultProps = {
  name: 'iPhone Xs Max',
  type: 'iPhone',
  public_year: 2018,
  storage: '64 GB'
}
 
 // Đúng kiểu dữ liệu
vd2Proptype.defaultProps = {
  name: 'iPad Mini 2019',
  type: 'iPad',
  public_year: 2019,
  storage: 64
}
 
 
 
// Sai kiểu dữ liệu vì type phải là các giá
// trị như iPhone, Ipad, Mac, SmartWatch
vd2Proptype.defaultProps = {
  name: 'Airpods 2',
  type: 'Airpod',
  public_year: 2019
}
 
//Chỉ định validation props
vd2Proptype.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(["iPhone", "iPad", "Mac", "SmartWatch"]),
  public_year: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}
export default vd2Proptype;