





let typed= new Typed(".multiple-text",{
    strings:["Frontend developer","Competative Programmer","Blogger"],
    typeSpeed:80,
    backSpeed:80,
    backDelay:2200,
    loop:true
    
})


let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
    progressEndValue = 90,    
    speed = 100;
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#0ff2f9 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);



let circularProgress1 = document.querySelector(".circular-progress1"),
    progressValue1 = document.querySelector(".progress-value1");

let progressStartValue1 = 0,    
    progressEndValue1= 40,    
    speed1 = 100;
    
let progress1= setInterval(() => {
    progressStartValue1++;

    progressValue1.textContent = `${progressStartValue1}%`
    circularProgress1.style.background = `conic-gradient(#0ff2f9 ${progressStartValue1 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue1 == progressEndValue1){
        clearInterval(progress1);
    }    
}, speed1);

let circularProgress2 = document.querySelector(".circular-progress2"),
    progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,    
    progressEndValue2= 60,    
    speed2 = 100;
    
let progress2= setInterval(() => {
    progressStartValue2++;

    progressValue2.textContent = `${progressStartValue2}%`
    circularProgress2.style.background = `conic-gradient(#0ff2f9 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue2 == progressEndValue2){
        clearInterval(progress2);
    }    
}, speed2);


var mixer=mixitup(".container1");

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
