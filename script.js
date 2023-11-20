const getlocation = () => {
    alert("Getting location");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) =>{
        // console.log(position); 
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log(lat, long)
    });
}
}