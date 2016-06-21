var fahrenheit;
var yourZip = '53403';
var url ='http://api.openweathermap.org/data/2.5/weather?zip=';
var url2 = 'http://api.openweathermap.org/data/2.5/forecast/daily?zip=';
var appId = '&appid=5cd72a4d73eadb90efdc70dcdb135c07';
var count = ',us'
var count2 = ',us&cnt=3';
var masterUrl= url+yourZip+count+appId;
var masterUrl2 = url2+yourZip+count2+appId;
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



$( "#yourZip" ).keypress(function(e) {
   var keycode = (event.keyCode ? event.keyCode : event.which);
   if ( keycode == '13' ) {
     e.preventDefault();
      yourZip = $('#yourZip').val();
       getWeather();
  getForecast();
    }   


});


function getWeather(){
  yourZip = $('#yourZip').val();
   masterUrl;
  $.getJSON(masterUrl,function(data){
   var me = data;
   var we = me.weather[0]
   var main = me.main
    convertTemp(main.temp)
     render(me,we,fahrenheit,main)      
});
}

function getForecast(){
  yourZip = $('#yourZip').val();
  masterUrl2= url2+yourZip+count2+appId;
  $.getJSON(masterUrl2,function(data){
console.log(data);     
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