import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ListItem extends Component {
    render() {
        return (
            <div>
                <li className="list-group-item d-flex justify-content-between">
                    <div>


                    </div>
                    <div className="d-flex ">
                        <button type="button" className="btn btn-success">
                            <i className="fas fa-check" />
                        </button>
                        <button type="button" className="btn btn-danger">
                            <i className="fas fa-times" />
                        </button>

                    </div>
                </li>
            </div>
        );
    }
};


let jobList = [1]


class AddJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }

    

    handleAddJob(e) {
        jobList.push(this.state.inputValue);
        
        console.log('jobList :', jobList);

    }
    changeValueInput(e){
        console.log('e.target :', e.target);
        this.setState({
            inputValue: e.target.value
        })
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
                    onChange={e => this.changeValueInput(e)}
                />

                <div onClick={ e => this.props.onClick(e)} className="input-group-append">
                    <span className="btn btn-primary" id="basic-addon2">
                        Add
               </span>
                </div>
                
            </div>
        );
    }
};




class ToDoList extends React.Component {

    
    handleAddJobs(e) {
        console.log('e',e.target);
    }
    renderList() {
        return (
            <div>
                {jobList.map(
                    (index) => {
                        return <ListItem name={index} key={index.toString()} age="28" />
                    }
                )}


            </div>
        )
    }
    render() {
        return (
            <div className="w-50 mx-auto mt-5">
                <AddJob onClick= { e => this.handleAddJobs(e)}  />
                {this.renderList()}

            </div>
        );
    }
};


ReactDOM.render(<ToDoList />, document.getElementById("root"));


