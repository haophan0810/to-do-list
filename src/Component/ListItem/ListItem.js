import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        return (
            <div>
                <li className="list-group-item d-flex justify-content-between">
                    {this.props.jobName}
                    <div className="d-flex ">
                        <div className="btn-group">
                            <button type="button" className="btn btn-success" 
                            onClick= { console.log('this.props.key :', this.props.value)}
                            >
                                <i className="fas fa-check" />
                            </button>
                            <button type="button" className="btn btn-danger">
                                <i className="fas fa-times" />
                            </button>
                        </div>


                    </div>
                </li>
            </div>
        )
    }
}
