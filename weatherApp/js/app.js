window.addEventListener("load", ()=>{
	let long;
	let lat;

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position=>{
			long=position.coords.longitude;
			lat=position.coords.latitude;
			//const proxy='https://cors-anywhere.herokuapp.com/';
			const api='https://api.darksky.net/forecast/c122112fb2884a3403d8f843ac04cfc4/${lat},${long}';
			fetch(api).then(
				response=>{response.json()}).then(
				data=>{console.log(data);});
		});

	}
});