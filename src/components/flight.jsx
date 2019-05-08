import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/flight.css';

class FlightTable extends Component { 
    render() {
        return (
            <Fragment><br/>
                <table className = 'flight-table'>
                    <thead>

                    </thead>
                    <tbody>
                        <tr className = 'flight-table-row'>
                            <th>Flight Id</th>
                            <th>Flight Number</th>
                            <th>Origin</th>
                            <th>Destination</th>
                            <th>Departure</th>
                            <th>Arrival</th>
                            <th>Status</th>
                        </tr>
                        {
                            this.props.flightList.map(flight => {
                                return (
                                    <tr className = 'flight-table-row 2'>
                                        <th>{flight.flightId}</th>
                                        <th>{flight.flightNumber}</th>
                                        <th>{flight.flightOrigin}</th>
                                        <th>{flight.flightDestination}</th>
                                        <th>{flight.flightDeparture}</th>
                                        <th>{flight.flightArrival}</th>
                                        <th>{flight.flightStatus}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <form className = 'flight'>
                    Flight ID:  <input type = "text" name = "flightId" placeholder = "FLIGHT ID" onChange = {this.props.handleChangeInfoFlight}/>
                    Flight Number: <input type = "text" name = "flightNumber" placeholder = "FLIGHT NUMBER" onChange = {this.props.handleChangeInfoFlight}/>
                    Origin: <input type = "text" name = "flightOrigin" placeholder = "FLIGHT ORIGIN" onChange = {this.props.handleChangeInfoFlight}/>
                    Destination: <input type = "text" name = "flightDestination" placeholder = "FLIGHT DESTINATION" onChange = {this.props.handleChangeInfoFlight}/><br/>
                    Departure: <input type = "date" name = "flightDeparture" placeholder = "FLIGHT DEPARTURE" onChange = {this.props.handleChangeInfoFlight}/>
                    Arrival: <input type = "date" name = "flightArrival" placeholder = "FLIGHT ARRIVAL" onChange = {this.props.handleChangeInfoFlight}/>
                    Status:
                    <select name = "flightStatus" placeholder = "FLIGHT STATUS" onChange = {this.props.handleChangeInfoFlight}><option></option>
                        <option name = "flightStatus" value = "0-Cancelled" onChange = {this.props.handleChangeInfoFlight}>0-Cancelled</option>
                        <option name = "flightStatus" value = "1-Scheduled" onChange = {this.props.handleChangeInfoFlight}>1-Scheduled</option>
                        <option name = "flightStatus" value = "2-Gate Open" onChange = {this.props.handleChangeInfoFlight}>2-Gate Open</option>
                        <option name = "flightStatus" value = "3-Boarding" onChange = {this.props.handleChangeInfoFlight}>3-Boarding</option>
                        <option name = "flightStatus" value = "4-Gate Closed" onChange = {this.props.handleChangeInfoFlight}>4-Gate Closed</option>
                        <option name = "flightStatus" value = "5-On Time" onChange = {this.props.handleChangeInfoFlight}>5-On Time</option>
                        <option name = "flightStatus" value = "6-Delayed" onChange = {this.props.handleChangeInfoFlight}>6-Delayed</option>
                        <option name = "flightStatus" value = "7-Early" onChange = {this.props.handleChangeInfoFlight}>7-Early</option>
                        <option name = "flightStatus" value = "8-Arrived" onChange = {this.props.handleChangeInfoFlight}>8-Arrived</option>
                    </select>
                    <button type = "button" onClick = {this.props.handleAddFlight}>ADD</button>
                </form><br/>
            </Fragment>
        );
    }
}

FlightTable.propTypes = {
    flightList: PropTypes.array,
    handleAddFlight: PropTypes.func,
    handleChangeInfoFlight: PropTypes.func
}

export {
    FlightTable
}