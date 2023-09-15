mapboxgl.accessToken = 'pk.eyJ1IjoibmlyYW5qYW5tYXAiLCJhIjoiY2xseGs1Y3RiMGR6YTNkczZwYmk0dTRzNiJ9.bYmlMM0ukhilsWPf-ZnMZw';
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'country,region,place,postcode,locality,neighborhood'
});

geocoder.addTo('#geocoder');

// Get the geocoder results container.
const results = document.getElementById('result');

// Add geocoder result to container.
geocoder.on('result', (e) => {
    const q=(e.result).center[0];
    const w=(e.result).center[1];
    console.log(q);
    console.log(w);
});