var fahrenheit;
var yourZip = '53403';
var url ='http://api.openweathermap.org/data/2.5/weather?zip=';
var appId = ',us&appid=5cd72a4d73eadb90efdc70dcdb135c07';
var masterUrl= url+yourZip+appId;
$( document ).ready(function() {

$.getJSON(masterUrl,function(data){
   var me = data;
   var we = me.weather[0]
   var main = me.main
    convertTemp(main.temp)
     render(me,we,fahrenheit,main)      
});
render();
convertTemp(temp);

});

function getWeather(){
  yourZip = $('#yourZip').val();
   masterUrl= url+yourZip+appId;
  $.getJSON(masterUrl,function(data){
   var me = data;
   var we = me.weather[0]
   var main = me.main
    convertTemp(main.temp)
     render(me,we,fahrenheit,main)      
});
}

function convertTemp(temp){
   fahrenheit=  (temp - 273.15) * 9/5 + 32
  return fahrenheit;
}
function render(me,we,fahrenheit, main){
$('.city').html(me.name);
$('.description').html(we.description);
$('.temp').html('Tempature: '+fahrenheit.toFixed(1));
$('.humidity').html('Humidity  '+main.humidity+''+'&#37;')
}