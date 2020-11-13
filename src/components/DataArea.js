import React from 'react';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact'
class DataArea extends React.Component {
    state = {
        employees: []
    }
    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=200&nat=us")
            .then(records => {
                console.log(records)
                let APIdata = records.data.results
                let employees = []
                for (let i = 0; i < APIdata.length; i++) {
                  var date = new Date(Date.parse(APIdata[i].dob.date))
                    var emp = {

                        name: APIdata[i].name.title + " "+ APIdata[i].name.first + " " + APIdata[i].name.last,
                        email: APIdata[i].email,
                        phone: APIdata[i].phone,
                        DOB: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
                        location: APIdata[i].location.city + ", " + APIdata[i].location.state
                    }
                    employees.push(emp)

                }
                this.setState({ employees: employees })
                console.log(this.state.employees)
            })
    }
    render() {
        let dataArea = {
            columns: [
                {
                    label: "name",
                    field: "name",
                    width: 200,
                },
                {
                    label: "email",
                    field: "email",
                    width: 200,
                },  
                {
                    label: "phone",
                    field: "phone",
                    width: 200,
                },
                {
                    label: "DOB",
                    field: "DOB",
                    width: 200,
                },  
                {
                    label: "location",
                    field: "location",
                    width: 200,
                }         
            ],
            rows: this.state.employees
    }
    return(<div>
        <h1>Employee Data</h1>
        <MDBDataTable data ={dataArea}> </MDBDataTable>
        </div >)
    }
}

export default DataArea;