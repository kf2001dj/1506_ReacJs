import React from "react";
class AppSate extends React.Component{
    constructor(props){
        super(props);
        this.state = { index: 1};
    }
    render() {
        return(
            <div>
                <h1>Giá Trị {this.state.index}</h1>
                <button onClick={ () => {
                    this.setState(
                        {
                            index: this.state.index +1
                        }
                    )
                } } > Tăng </button>
                
                <button onClick={ () => {
                    this.setState(
                        {
                            index: this.state.index -1
                        }
                    )
                } } > Giảm </button>

            </div>  
        );

    }
}
export default AppSate;