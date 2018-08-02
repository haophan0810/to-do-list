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
    removeJob = (index) => {
        delete jobs[index];
        // jobs.splice(index,1);
        this.setState({
            jobsList:jobs
        })
    }

    insertJob = (a) => {
        if(a.trim()!==''){
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
                    return <ListItem key={index} 
                    removeItem = { this.removeJob }
                     value={index} jobName={item}/>
                }
            )
        )
    }
    render() {
        return (
            <div className='w-75 mx-auto mt-5'>
            <h2 className='text-center mb-3 text-uppercase'>To do list</h2>
                <AddJob getJob={ this.insertJob }/>
                {this.renderJobsList()}   
            </div>
        );
    }
}



ReactDOM.render(<ToDoList />, document.getElementById("root"));


