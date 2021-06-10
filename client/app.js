function onClickedEstimatePrice(){
  var sqft = document.getElementById('uisqft')
  var bhk = document.getElementById('uibhk')
  var bathrooms = document.getElementById('uibathrooms')
  var location = document.getElementById('uiLocations')
  var estPrice = document.getElementById('uiestimatedprice')

  url ="http://127.0.0.1:5000/predict_home_price";
  $.post(url, {
     total_sqft: parseFloat(sqft.value),
     bhk: bhk.value,
     bath: bathrooms.value,
     location: location.value
 },function(data, status) {
     console.log(data.estimated_price);
     estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
     console.log(status);
 });
}

function OnPageload(){
  var url = "http://127.0.0.1:5000/get_location_names";
  $.get(url,function(data, status) {
     console.log("got response for get_location_names request");
     if(data) {
         var locations = data.locations;
         var uiLocations = document.getElementById("uiLocations");
         $('#uiLocations').empty();
         for(var i in locations) {
             var opt = new Option(locations[i]);
             $('#uiLocations').append(opt);
         }
     }
 });
}




window.onload = OnPageload;
