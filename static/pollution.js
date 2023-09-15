var array;
var CO_concentration;
var CO_aqi;
var NO2_concentration;
var NO2_aqi;
var O3_concentration;
var O3_aqi;
var PM10_concentration;
var PM10_aqi;
var SO2_concentration;
var SO2_aqi
var AQI;
var lat=13.037860255283462;
var long=77.59162737018045;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ad90836962msha2d27f3bbfab0f1p17401fjsn7c01f3d3d751',
        'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
    }
};

fetch(`https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?lat=${lat}&lon=${long}`,options)
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
            AQI_1.style.color='rgb(158, 12, 12)';
        }
    })
    .catch(err=>console.error(err));
    console.log(array)






function onDragEnd1() {
    const lngLat = marker.getLngLat();
    long=lngLat.lng;
    lat=lngLat.lat;
    console.log(long);
    console.log(lat);
    array=[(long),(lat)];
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ad90836962msha2d27f3bbfab0f1p17401fjsn7c01f3d3d751',
            'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch(`https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?lat=${lat}&lon=${long}`,options)
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
            AQI_1.innerHTML = `${AQI}`
            if(AQI<50){
                AQI_1.style.color='green';
            }
            else if(AQI>50 && AQI<100){
                AQI_1.style.color='yellow';
            }
            else if(150>AQI && AQI>100){
                AQI_1.style.color='orange';
            }
            else if(200>AQI && AQI>150){
                AQI_1.style.color='red';
            }
            else if(AQI>200){
                AQI_1.style.color='rgb(158, 12, 12)';
            }
        })
        .catch(err=>console.error(err));
        console.log(array)
}
geocoder.on('result', (e) => {
    const q=(e.result).center[0];
    const w=(e.result).center[1];
    console.log(q);
    console.log(w);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ad90836962msha2d27f3bbfab0f1p17401fjsn7c01f3d3d751',
            'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch(`https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?lat=${w}&lon=${q}`,options)
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
            AQI_1.innerHTML = `${AQI}`
            if(AQI<50){
                AQI_1.style.color='green';
            }
            else if(AQI>50 && AQI<100){
                AQI_1.style.color='yellow';
            }
            else if(150>AQI && AQI>100){
                AQI_1.style.color='orange';
            }
            else if(200>AQI && AQI>150){
                AQI_1.style.color='red';
            }
            else if(AQI>200){
                AQI_1.style.color='rgb(158, 12, 12)';
            }
        })
        .catch(err=>console.error(err));
        console.log(array)
    
    
});
marker.on('dragend', onDragEnd1);