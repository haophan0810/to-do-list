import React, { Component } from 'react'

export default class AddJob extends Component {
    constructor(props) {
        super(props);
        this.state={
            valueInput : ''
        }
    }
    
    changeValueInput= (e) => {
        console.log('this.target :', e.target);
        this.setState({
            valueInput: e.target.value
        });
        
    }
    resetInputValue = (e) => {
        
        this.setState({
            valueInput: ''
        });
        e.target.value = "";
        console.log('object :', this.state.valueInput);
    }
    hello = () => {
        console.log('Test thôi ahihi :', document.getElementById('basic-addon2'));
    }
    render() {
        return (
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add job"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    
                    onChange={e => {
                        this.changeValueInput(e)
                        this.hello()
                    } }
                    onClick={
                        (e) => this.resetInputValue(e)
                    }
                />

                <div className="input-group-append">
                    <span className="btn btn-primary" id="basic-addon2" 
                        onClick={ (e) => {
                            this.props.getJob(this.state.valueInput);
                            
                        }}>
                        Add
                    </span>
                </div>

            </div>
        )
    }
}
