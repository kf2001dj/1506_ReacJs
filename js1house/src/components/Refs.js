import  React from 'react';

export  default  class RefsCode extends React.Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    handleClick = () => {
        this.myRef.current.focus();
    }

    render(){
        return(
            <div>
                <code>cntt_thanhdong</code>
                <input 
                    name='email'
                    onChange={this.onChange}
                    ref={this.myRef}
                    type='text'
                    ></input>
                <button onClick={this.handleClick} >Focus Input</button>
            </div>
        );

    }


}