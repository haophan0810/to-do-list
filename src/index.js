import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddJob from './Component/AddJob/AddJob.js';
import ListItem from './Component/ListItem/ListItem.js';

let jobs=[];

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state={
            jobsList:jobs
        }
    }
    

    insertJob = (a) => {
        if(a.trim()!=''){
            jobs.push(a);
            this.setState({
                jobsList:jobs
            });
        }
       
    }
    renderJobsList (){
        return (
            this.state.jobsList.map(
                (item, index) => {
                    return <ListItem key={index} value={index} jobName={item}/>
                }
            )
        )
    }
    render() {
        return (
            <div>
                <AddJob getJob={ this.insertJob }/>
                {this.renderJobsList()}   
            </div>
        );
    }
}



ReactDOM.render(<ToDoList />, document.getElementById("root"));


