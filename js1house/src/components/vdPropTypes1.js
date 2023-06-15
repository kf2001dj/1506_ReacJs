import React from "react";
import PropTypes from 'prop-type';

class vdPropTypes1 extends React.Component {
    render() {
        const {number1, number2} = this.props;
        return(
            <div>
                <h1> 
                    {number1} +{number2} ={number1 + number2}
                </h1>
            </div>
        );
    }
}
vdPropTypes1.defaultProps = {
    number1 : 4,
    number2 : 2,
}
vdPropTypes1.propTypes= {
    number1 : PropTypes.number1,
    number2 : PropTypes.number2
}
export default vdPropTypes1;