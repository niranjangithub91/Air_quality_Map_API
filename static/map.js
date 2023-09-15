var array=[];
var long;
var lat;
var x=77.59162737018045;
var y=13.037860255283462;
var q=77.59162737018045;
var w=13.037860255283462;
function getLocation(callback) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        callback(null, { latitude, longitude }); // Pass location data to the callback
      },
      function (error) {
        callback(error, null); // Pass an error to the callback
      }

    );
  } else {
    const error = new Error("Geolocation is not supported in this browser.");
    callback(error, null); // Pass an error to the callback
  }
}
mapboxgl.accessToken = 'pk.eyJ1IjoibmlyYW5qYW5tYXAiLCJhIjoiY2xseGs1Y3RiMGR6YTNkczZwYmk0dTRzNiJ9.bYmlMM0ukhilsWPf-ZnMZw';
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [77.59162737018045,13.037860255283462],
    zoom: 4
});
const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([q,w])
    .addTo(map);
coordinates.innerHTML = `Longitude: ${x}<br />Latitude: ${y}`;
getLocation(function (error, locationData) {
  if (error) {
    console.error(`Error getting location`);
  } else {
    console.log(`Latitude: ${locationData.latitude}, Longitude: ${locationData.longitude}`);
    map.setCenter([locationData.longitude,locationData.latitude]); // Set the new center position
    marker.setLngLat([locationData.longitude,locationData.latitude]);
    coordinates.innerHTML = `Longitude: ${locationData.longitude}<br />Latitude: ${locationData.latitude}`


    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ad90836962msha2d27f3bbfab0f1p17401fjsn7c01f3d3d751',
        'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
    }
};

fetch(`https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?lat=${locationData.latitude}&lon=${locationData.longitude}`,options)
    .then(response=>response.json())
    .then(response=>{
        console.log(response)
        CO_concentration=response.CO.concentration;
        CO_aqi=response.CO.aqi;
        NO2_concentration=response.NO2.concentration;
        NO2_aqi=response.NO2.aqi
        O3_concentration=response.O3.concentration;
        O3_aqi=response.O3.aqi
        PM10_concentration=response.PM10.concentration;
        PM10_aqi=response.PM10.aqi;
        SO2_concentration=response.SO2.concentration;
        SO2_aqi=response.SO2.aqi;
        AQI=response.overall_aqi;
        CO_1.innerHTML = `CO Concentraion:${CO_concentration}<br />CO AQI:${CO_aqi}`;
        NO2_1.innerHTML = `NO2 Concentraion:${NO2_concentration}<br />NO2 AQI:${NO2_aqi}`
        O3_1.innerHTML = `O3 Concentraion:${O3_concentration}<br />O3 AQI:${O3_aqi}`
        PM10_1.innerHTML = `PM10 Concentraion:${PM10_concentration}<br />PM10 AQI:${PM10_aqi}`
        SO2_1.innerHTML = `SO2 Concentraion:${SO2_concentration}<br />SO2 AQI:${SO2_aqi}`
        AQI_1.innerHTML = `${AQI}`;
        if(AQI<50){
            AQI_1.style.color='green';
        }
        else if(AQI>50 && AQI<100){
            AQI_1.style.color='yellow';
        }
        else if(150>AQI>100){
            AQI_1.style.color='orange';
        }
        else if(200>AQI>150){
            AQI_1.style.color='red';
        }
        else{
            AQI_1.style.color='black';
        }
    })
    .catch(err=>console.error(err));
    console.log(array)

  }
});
function updateMarkerPosition(newLngLat) {
    marker.setLngLat(newLngLat);
}

function updateMapCenter(newLngLat) {
    map.setCenter(newLngLat); // Set the new center position
}

geocoder.on('result', (e) => {
    const q=(e.result).center[0];
    const w=(e.result).center[1];
    console.log(q);
    console.log(w);
    updateMarkerPosition([q,w]);
    updateMapCenter([q,w]);
    coordinates.innerHTML = `Longitude: ${q}<br />Latitude: ${w}`
});
function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    long=lngLat.lng;
    lat=lngLat.lat;
    console.log(long);
    console.log(lat);
    array=[(long),(lat)];
}
marker.on('dragend', onDragEnd);