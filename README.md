# Google Maps / Create React App

Renders a Google Map in React based on [this Codepen](http://codepen.io/anon/pen/PNooKz) and bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I created this repo as an example of one way to render Google Maps into a Create React App environment. I found many examples of how to combine React + GMaps, but none which worked at a "drop in and go" level of simplicity which the CRA bootstrap provides for starting React apps.

Google makes it easy for non-React environments: A single `<script>` tag and `<div id="map"></div>` and you're set - but this does work for React. Hopefully, this does :)


## To use:
Fork/clone/download/retype repo, however you want.

 - Edit `public/index.html` and change line 7 to include your Google Maps API key (Don't have one? [Get a Google Maps API key here](https://developers.google.com/maps/documentation/javascript/get-api-key))

 - `npm start` to launch application.

 - By default, app will serve on `localhost:3000` and should display the Create React App logo and header with a Google Map centered on Seattle, WA showing a pin and info window.
 
