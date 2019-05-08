import React, { Component } from 'react'; 
import './App.css';
import {getAirlinesPassenger, getAirlinesFlight} from './util/airlinesserver-helper';
import Header from './components/header.jsx';
import Body from './components/body.jsx'
import Footer from './components/footer.jsx';
import { PassengerTable } from './components/passenger';
import { FlightTable } from './components/flight';
import axios from 'axios';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import {BookFlight} from './components/bookflight';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      passengerList: [],

      passenger: {
          passengerId: '',
          passengerFname: '',
          passengerMname: '',
          passengerLname: '',
          passengerBdate: ''
      },

      flightList: [],

      flight: {
          flightId: '',
          flightNumber: '',
          flightOrigin: '',
          flightDestination: '',
          flightDeparture: '',
          flightArrival: '',
          flightStatus: ''
      },
    }
  }

  componentDidMount() {
    this.getPassenger();
    this.getFlight();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getPassenger() {
    getAirlinesPassenger().then(res => {
      this.setState({passengerList : res.data});
    })
  }

  getFlight() {
    getAirlinesFlight().then(res => {
      this.setState({flightList : res.data});
    })
  }

  handleChangeInfoPassenger = p => {
    const {name, value} = p.target;

    this.setState((prevState) => ({
      passenger: {
        ...prevState.passenger,
        [name]: value
      }
    }));
  }

  handleAddPassenger = p => {
    let passenger = this.state.passenger;
    let passengerList = [...this.state.passengerList];
    
    passengerList.push(passenger); 

    this.setState({passengerList : passengerList});

    p.preventDefault();

    console.log("POST")
    console.log(passenger);

    let headers = {'Content-Type' : 'application/json',}
        
        axios.post('http://localhost:8080/CaseStudy3rd/case/passenger', passenger, {headers: headers}).then(res => {
          console.log(res.data);
          window.location.reload();
        });
  }

  handleChangeInfoFlight = f => {
    const {name, value} = f.target;

    this.setState((prevState) => ({
      flight: {
        ...prevState.flight,
        [name]: value
      }
    }));
  }

  handleAddFlight = f => {
    let flight = this.state.flight;
    let flightList = [...this.state.flightList];
    
    flightList.push(flight); 

    this.setState({flightList : flightList});

    f.preventDefault();

    console.log("POST")
    console.log(flight);

    let headers = {'Content-Type' : 'application/json',}
        
        axios.post('http://localhost:8080/CaseStudy3rd/case/flight', flight, {headers: headers}).then(res => {
          console.log(res.data);
          window.location.reload();
        });
  }

  render (){
    return(
    <div className="App">
      <div className = "airlines-image">
      <HashRouter>
                <div>
                    <ul className = 'header'>
                        <li><NavLink to = '/'>Home</NavLink></li>
                        <li><NavLink to = '/passenger'>Passenger</NavLink></li>
                        <li><NavLink to = '/flight'>Flight</NavLink></li>
                        <li><NavLink to = '/bookflight'>Book a Flight</NavLink></li>
                    </ul>
                    <div className = 'content'>
                        <Route path = '/' exact component = {Body}/>
                        <Route path = '/passenger' render = {() => <PassengerTable passengerList = {this.state.passengerList} handleAddPassenger = {this.handleAddPassenger} handleChangeInfoPassenger = {this.handleChangeInfoPassenger}/>}/>
                        <Route path = '/flight' render = {() => <FlightTable flightList = {this.state.flightList} handleAddFlight = {this.handleAddFlight} handleChangeInfoFlight = {this.handleChangeInfoFlight}/>}/>
                        <Route path = '/bookflight' render = {() => <BookFlight flightList = {this.state.flightList}/>}/>
                    </div>
                </div>
      </HashRouter>
      <Footer/>
      </div>
    </div>  
    );
  }
}

export default App;
