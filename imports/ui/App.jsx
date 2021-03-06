import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

export default class App extends Component {
    constructor(props) {
        super(props);

        Tracker.autorun(function () {
            console.log(Mapbox.loaded());
            if(Mapbox.loaded()){
                console.log("mapbox: "+Mapbox.loaded())
                mapboxgl.accessToken = 'pk.eyJ1IjoicGl0b24xODIiLCJhIjoiY2lyZGJ5Nnp4MDA4Y2lrbWdqbzgwdXo1NiJ9.QdZjXpszY-iYWloTm82vWw';
                const map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/light-v9',
                    center: [18.04, 59.34],
                    zoom: 12.5
                });
                console.log(map)
                map.addControl(new mapboxgl.Navigation());
            }
        });
    }

    hideRideInfo() {

    }

    render() {
        return (
            <div id="map-page">
                <div id="map" className="mapboxgl-map">
                   <Link to="/login"> 
                        <div id="map-profile"></div>
                    </Link>
                </div>
                {/*<div id="map-logo">*/}
                    {/*Taxi Hop-On*/}
                {/*</div>*/}
                <div id="map-ride-info" className="input-container" style={{display: 'none'}}>
                    <div>
                        <span id="map-ride-address" className="header">Test</span>
                        <span id="map-ride-close" className="cross" onClick={ this.hideRideInfo.bind(this) }></span>
                    </div>
                    <div>
                        <span className="msg">Destination:</span>
                        <span id="map-ride-destination" className="destination">Arlanda</span>
                    </div>
                    <div>
                        <span id="map-ride-date" className="date">20.07 12:00</span>
                        <span id="map-ride-price" className="price">200 kr</span>
                    </div>
                </div>
                <div id="map-filter" className="input-container">
                    <div id="map-source">
                        <label htmlFor="field-destination">Destination</label>
                        <select id="field-destination">
                            <option>to Arlanda</option>
                            <option>from Arlanda</option>
                        </select>
                        <i className="bar"></i>
                    </div>
                    <div id="map-datetime">
                        <label htmlFor="field-datetime">When</label>
                        <input id="field-datetime" type="datetime-local" placeholder="Anytime"/>
                        <i className="bar"></i>
                    </div>
                </div>
                <div id="map-action-btn">
                    <span>Tap on markers to choose a ride</span>
                </div>
            </div>
        );
    }
}