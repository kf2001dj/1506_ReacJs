import React, { Component } from 'react';

// dung funtion component
const Welcome = function(props) {
    return(
        <div>
            <h1>Welcome</h1>
        </div>

    )

}

// dung class components dùng đc hết các props state,..
export default Welcome;

// class Welcome extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>
//                     What Hapo
//                 </h1>
//             </div>
//         );
//     }
// }
