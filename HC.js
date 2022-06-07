//This section if for the June / July holidays

var countDownDate1 = new Date("Jun 16, 2022 15:19:50").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate1 - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("junjul").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("junjul").innerHTML = "It's The Holidays!";
  }
}, 1000);

//This section if for the September / October holidays

var countDownDate2 = new Date("Sep 15, 2022 15:19:50").getTime();

var y = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate2 - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("sepoct").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(y);
    document.getElementById("sepoct").innerHTML = "Its The Holidays!";
  }
}, 1000);

//This section if for the December holidays

var countDownDate3 = new Date("Nov 25, 2022 15:19:50").getTime();

var z = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate3 - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("dec").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(z);
    document.getElementById("dec").innerHTML = "Its The Holidays!";
  }
}, 1000);