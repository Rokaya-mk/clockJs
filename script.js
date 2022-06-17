//get div tag
const clock = document.querySelector('.clock');
//clock function
const myClock =() => {
    //get current date
 let now = new Date();
 //get houres
 let hour = now.getHours();
 //get minutes
 let minute = now.getMinutes();
 //get secounds 
  let secound = now.getSeconds();

  //create html element
  let element = ` 
            <span> ${hour}</span>:
            <span> ${minute}</span>:
            <span class="scnd"> ${secound}</span>
            `;
//append element
clock.innerHTML = element;
}
setInterval(myClock,1000);
 //set an alarm 
const alarm = () => {
   n= new Date();
    if(n.getHours() == 00 && n.getMinutes() == 00  ){
        if(n.getSeconds() <= 3){
            
            let html = `<audio controls autoplay>
            <source src="clock-alarm.mp3" type="audio/mpeg">
            </audio>`;
            clock.innerHTML = html; 
        }      
    }  
}
setInterval(alarm,4000)
 