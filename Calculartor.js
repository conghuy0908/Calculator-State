import React, { Component } from 'react';

class Calculator extends Component {
    constructor (props) {
        super(props);
        this.state = {
            number1: ' ',
            number2: ' ',
            Result:' ',
            
        };
    }
    handleChangeNumber1 = (event) =>{
        this.setState({number1: event.target.value})
    };
    handleChangeNumber2 = (event) =>{
        this.setState({number2: event.target.value})
    }
    handlePlus = () =>{
        this.setState({Result: parseInt(this.state.number1) + parseInt(this.state.number2)})
    };
    handleSubtraction = () =>{
        this.setState({Result: parseInt(this.state.number1) - parseInt(this.state.number2)})
    };
    handleMultiple = () =>{
        this.setState({Result: parseInt(this.state.number1) * parseInt(this.state.number2)})
    };
    handleDivision = () =>{
        this.setState({Result: parseInt(this.state.number1) / parseInt(this.state.number2)})
    };
    render(){
        return (
        <div className="container">
            <input placeholder="Nhập số thứ nhất" name='number1' value={this.state.number1} onChange={(event) => this.handleChangeNumber1(event)}/>
            <br></br>
            <input placeholder='Nhập số thứ 2' name='number2' value={this.state.number2} onChange={(event) => this.handleChangeNumber2(event)}/>
            <br></br>
            <p>Result : {this.state.Result}</p>
            <button onClick={this.handlePlus}> + </button>
            <button onClick={this.handleSubtraction}> - </button>
            <button onClick={this.handleMultiple}> * </button>
            <button onClick={this.handleDivision}> / </button>
        </div>
        )
    };
};
export default Calculator;