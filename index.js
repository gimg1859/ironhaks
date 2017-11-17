var mapa
var marcaUniversidad 
$(document).ready(function(){
	$.ajax({ 
		url:"https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets/",headers:{ "token":"GkUvqcueOjuDDYSDeGHprVmllcfQzfQj" }});
	$("#getData").on("click", dataSet);})
//anteriores son globales
window.initMap = function(){
	var data = {
		name: 'NYU Stern School of Business, Manhattan',lat: 40.7291,lng: -73.9965} //data de la universidad
	map = new google.maps.Map(document.getElementById('map'), {
  		zoom: 18,
	  	center: new google.maps.LatLng(data.lat, data.lng)});

	var icono = {
		url: "universidad.png",
	    scaledSize: new google.maps.Size(128, 128), 
	    origin: new google.maps.Point(0,0), 
	    anchor: new google.maps.Point(0, 0)};

	marcaUniversidad= new google.maps.Marker({ 
		position: {lat: data.lat, lng: data.lng}, //carga long y lng
		map: map,//tipo mapa
		title: data.name, 
		icono: icono});

	datosTiempo();
	cargarPuntos();
};

function cargarPuntos(){


}
//function datosTiempo(URL){
//    var data = $.get(URL,funcion(){
//        console.long(URL)
 //   })
//    .done(funcion(){
        
//    })
 //   .fail(funcion(error){
//      console.error(error);  
 //   })
//}
//}
