import React from 'react';
import axios from 'axios';

class DataArea extends React.Component{
    state= {
        employees: []
    }
    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=200&nat=us")
        .then(records =>{
            console.log(records)
        })
    }
    render(){
        return(<div>
            <h1>Employee Data</h1>
        </div>)
    }
}

export default DataArea;