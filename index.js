const clock=document.querySelector(".clock");

let second = 0, min = 0, hr = 0;
let intervalId;
const startStopwatch = ()=>{
    intervalId = setInterval(()=>{
        if(second < 59){
            second++;
        }

        else if(min >=59){
            hr++;
            min=0;
        }
        else{
            second=0;
            min++;
        }

        const seconds = String(second).padStart(2,"0");
        const minutes = String(min).padStart(2,"0");
        const hours = String(hr).padStart(2,"0");

        //console.log(`${hours}:${minutes}:${seconds}`);
        clock.innerText=`${hours}:${minutes}:${seconds}`;
    },1000);
};

const stopStopwatch  = ()=>{
    clearInterval(intervalId);
};

const resetStopwatch = ()=>{
    second=0;
    min=0;
    hr=0;
    clock.innerText=`00:00:00`;
}