import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import './main.html';

import home  from '../../../imports/ui/App.jsx';
import login from '../../../imports/ui/Login.jsx';

Meteor.startup(() => {
    // loading Google Maps API
    // GoogleMaps.load({
    //     key: 'AIzaSyAMUsNldKIjKx7FDU_NwrGYi9BXwxN-DLY',
    //     libraries: 'places'  // also accepts an array if you need more than one
    // });
    render(
    	<Router history={browserHistory}>
	      <Route path='/' 			component={home} />
	      <Route path='/login' 		component={login} />
    	</Router>, document.getElementById('render-target'));


    Mapbox.load({
        gl: true,
        // plugins: ['minimap', 'markercluster']
    });

    // Tracker.autorun(() => {
    //     Session.set('autoDetectedCurrentLocation', Geolocation.latLng());
    // });
});
