
let min = sec = ms = "0" + 0,
startTimer;


const startBtn = document.querySelector(".start"),
 resetBtn = document.querySelector(".reset"),
 stopBtn = document.querySelector(".stop");
 
 startBtn.addEventListener("click", start);
  resetBtn.addEventListener("click", reset);
   stopBtn.addEventListener("click", stop);
   
   function start() {
	   startBtn.classList.add("active");
	   stopBtn.classList.remove("stopActive");
	   
	   startTimer = setInterval(()=>{
		   ms++
		   ms = ms < 10 ? "0" + ms :ms;
		   
		   if(ms == 100){
			   sec++;
			   sec = sec < 10 ? "0" + sec :sec;
			   ms = "0" + 0;  
		   }
			   
			   
		   if(sec == 60){
			   min++;
			   min = min < 10 ? "0" + min :min;
			   sec = "0" + 0;
			   console.log(min);
		   }
		   
		  putValue();
	   },10); //1000ms = 1s
   }
   

   function reset() {
	   startBtn.classList.remove("active");
	   startBtn.classList.remove("stopActive");
	   clearInterval(startTimer);
	   min = sec = ms = "0" + 0;
	   putValue();
   }
   
   function stop() {
	   startBtn.classList.remove("active");
	   stopBtn.classList.add("stopActive");
	   clearInterval(startTimer);
   }
   
   
   function putValue() {
	   document.querySelector(".millisecond").innerText = ms;
	   document.querySelector(".second").innerText = sec;
	   document.querySelector(".minute").innerText = min;
   }
   
//when space is pressed, turn background red wait 1 second and the turn green
//space keycode is 32





