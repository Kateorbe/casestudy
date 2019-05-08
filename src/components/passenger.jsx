import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/passenger.css';

class PassengerTable extends Component {
    render() {
        return (
            <Fragment>
                <table className = 'passenger-table'>
                    <thead>
                    </thead>
                    <tbody>
                        <tr className = 'passenger-table-row'>
                            <th>Passenger Id</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Status</th>
                        </tr>
                        {
                            this.props.passengerList.map(passenger => {
                                return (
                                    <tr>
                                        <th>{passenger.passengerId}</th>
                                        <th>{passenger.passengerFname}</th>
                                        <th>{passenger.passengerMname}</th>
                                        <th>{passenger.passengerLname}</th>
                                        <th>{passenger.passengerBdate}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <form className = 'passenger'>
                    Passenger ID: <input type = "text" name = "passengerId" placeholder = "PASSENGER ID" onChange = {this.props.handleChangeInfoPassenger}/><br/>
                    First Name: <input type = "text" name = "passengerFname" placeholder = "FIRST NAME" onChange = {this.props.handleChangeInfoPassenger}/>
                    Middle Name: <input type = "text" name = "passengerMname" placeholder = "MIDDLE NAME" onChange = {this.props.handleChangeInfoPassenger}/>
                    Last Name: <input type = "text" name = "passengerLname" placeholder = "LAST NAME" onChange = {this.props.handleChangeInfoPassenger}/>
                    Birth Date: <input type = "date" name = "passengerBdate" placeholder = "BIRTH DATE" onChange = {this.props.handleChangeInfoPassenger}/>
                    <button type = "button" onClick = {this.props.handleAddPassenger}>ADD</button>
                </form><br/>
            </Fragment>
        );
    }
}

PassengerTable.propTypes = {
    passengerList: PropTypes.array,
    handleAddPassenger: PropTypes.func,
    handleChangeInfoPassenger: PropTypes.func
}

export {
    PassengerTable
}