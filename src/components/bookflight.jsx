import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {myBookflight} from '../util/function.jsx';
import '../css/bookflight.css';
import axios from 'axios';

class BookFlight extends Component {

    constructor(props)
    {
        super(props)

        this.state = ({
            id: '',
            flightId: '',
            flightNumber: '',
            flightOrigin: '',
            flightDestination: '',
            flightDeparture: '',
            flightArrival: '',
            flightStatus: '',

            flight: {
                flightNumber: '',
                flightOrigin: '',
                flightDestination: '',
                flightDeparture: '',
                flightArrival: '',
                flightStatus: '',
                flightId: ''
            }
        });

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFlightNumber = this.handleChangeFlightNumber.bind(this);
        this.handleChangeFlightOrigin = this.handleChangeFlightOrigin.bind(this);
        this.handleChangeFlightDestination = this.handleChangeFlightDestination.bind(this);
        this.handleChangeFlightDeparture = this.handleChangeFlightDeparture.bind(this);
        this.handleChangeFlightArrival = this.handleChangeFlightArrival.bind(this);
        this.handleChangeFlightStatus = this.handleChangeFlightStatus.bind(this);
    }

    handleChangeFlightStatus(event)
    {
        this.setState({flightStatus: event.target.value});
    }

    handleChangeFlightNumber(event)
    {
        this.setState({flightNumber: event.target.value});
    }

    handleChangeFlightOrigin(event)
    {
        this.setState({flightOrigin: event.target.value});
    }

    handleChangeFlightDestination(event)
    {
        this.setState({flightDestination: event.target.value});
    }

    handleChangeFlightDeparture(event)
    {
        this.setState({flightDeparture: event.target.value});
    }

    handleChangeFlightArrival(event)
    {
        this.setState({flightArrival: event.target.value});
    }

    handleChange = event =>
    {
        event.preventDefault();
        
        let flightId = event.target.value;
  
        axios.get('http://localhost:8080/CaseStudy3rd/case/flight/' + flightId).then(res => {

            console.log(res.data);
            this.setState({
                flightId: res.data.flightId,
                flightNumber: res.data.flightNumber,
                flightOrigin: res.data.flightOrigin,
                flightDestination: res.data.flightDestination,
                flightDeparture: res.data.flightDeparture,
                flightArrival: res.data.flightArrival,
                flightStatus: res.data.flightStatus
            });
          })         
    }

    handleUpdate = s => {
        
        s.preventDefault();
        let flight = this.state.flight;

        flight.flightNumber =this.state.flightNumber;
        flight.flightOrigin = this.state.flightOrigin;
        flight.flightDestination = this.state.flightDestination;
        flight.flightDeparture = this.state.flightDeparture;
        flight.flightArrival = this.state.flightArrival;
        flight.flightStatus =this.state.flightStatus;
        flight.flightId = this.state.flightId;
    
        console.log("PUT");
        console.log(flight);
            
        axios.put('http://localhost:8080/CaseStudy3rd/case/flight', flight).then(res => {
            console.log(res.data);
            window.location.reload();
        }); 
    }

    render() {
        return (
            <Fragment>
            <div className='search'><br/>
                <input type = 'text' id='myInput' onKeyUp = {myBookflight} placeholder = 'Search for flights..'/><br/>
                <table className = 'flight-table' id = 'myTable'>
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
                            this.props.flightList.map((flight,id) => {
                                return (
                                    <tr className = 'flight-table-row 2' key={id}>
                                        <td>{flight.flightId}</td>
                                        <td>{flight.flightNumber}</td>
                                        <td>{flight.flightOrigin}</td>
                                        <td>{flight.flightDestination}</td>
                                        <td>{flight.flightDeparture}</td>
                                        <td>{flight.flightArrival}</td>
                                        <td>{flight.flightStatus}</td>
                                    </tr>   
                                )
                            })
                        }
                    </tbody>
                </table>
                <form className = 'flight'>
                    Flight ID:  <select name = "flightId" placeholder = "FLIGHT ID" onChange = {this.handleChange}> 
                                    <option></option>
                                {this.props.flightList.map((flight) => 
                                    <option key = {flight.flightId} name ="flightId" >{flight.flightId}
                                    </option>
                                    )}
                                </select>  
                    Flight Number: 
                    <input type = "text" name = "flightNumber" defaultValue={this.state.flightNumber} onChange = {this.handleChangeFlightNumber}/>
                    Origin: 
                    <input type = "text" name = "flightOrigin" defaultValue={this.state.flightOrigin} onChange = {this.handleChangeFlightOrigin} />
                    Destination: 
                    <input type = "text" name = "flightDestination" defaultValue={this.state.flightDestination} onChange = {this.handleChangeFlightDestination} /><br/>
                    Departure: 
                    <input type = "date" name = "flightDeparture" defaultValue={this.state.flightDeparture} onChange = {this.handleChangeFlightDeparture}/>
                    Arrival: 
                    <input type = "date" name = "flightArrival" defaultValue={this.state.flightArrival} onChange = {this.handleChangeFlightArrival}/>
                    Status:
                    <select name = "flightStatus" onChange = {this.handleChangeFlightStatus}><option> </option>
                        <option name = "flightStatus">0-Cancelled</option>
                        <option name = "flightStatus">1-Scheduled</option>
                        <option name = "flightStatus">2-Gate Open</option>
                        <option name = "flightStatus">3-Boarding</option>
                        <option name = "flightStatus">4-Gate Closed</option>
                        <option name = "flightStatus">5-On Time</option>
                        <option name = "flightStatus">6-Delayed</option>
                        <option name = "flightStatus">7-Early</option>
                        <option name = "flightStatus">8-Arrived</option>
                    </select>
                    <button type = "button" onClick = {this.handleUpdate}>Edit Flight</button>
                </form>
        </div>
        </Fragment>
        );
    }
}


BookFlight.propsType = {
flightList: PropTypes.array
}

export {
    BookFlight
}