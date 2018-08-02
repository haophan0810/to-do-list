import React, { Component } from 'react'

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            success:'bg-secondary text-white',
            display:''
        }
    }
    
    jobSuccess = () => {
        this.setState({
            success:'bg-success text-white',
            display:'d-none'
        });
    }

    render() {
        return (
            <div>
                <li className={"d-flex justify-content-between border-bottom "}>
                
                <div className={"d-flex align-items-center w-100 pl-3 rounded-left "+this.state.success}>
                    {this.props.jobName}
                    </div>
                    
                    <div className="d-flex ">
                        <div className="btn-group">
                            <button type="button" className={"btn btn-success rounded-0 "+this.state.display} 
                            onClick= { () => this.jobSuccess() }
                            >
                                <i className="fas fa-check" />
                            </button>
                            <button type="button" className="btn btn-danger"
                            onClick={ () => this.props.removeItem(this.props.value) }
                            >
                                <i className="fas fa-times" />
                            </button>
                        </div>


                    </div>
                </li>
            </div>
        )
    }
}
