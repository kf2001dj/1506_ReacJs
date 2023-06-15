import React from "react";


const Clothes = (props) => {
    console.log(props)

    return (
        <div>
            <h1>{props.chinlden}</h1>
            <ul>
                <li><b>Tên :</b>{props.name}</li>
                <li><b>Loại :</b>{props.type}</li>
                <li><b>Màu :</b>{props.color}</li>
                <li><b>Kích Cỡ</b>{props.size}</li>
          
            </ul>
            <hr></hr>
        </div>

    );
};
export default Clothes;