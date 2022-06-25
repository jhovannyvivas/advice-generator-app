let advice_element = document.getElementById('advice');
let number_element = document.getElementById('number');
let dice_element = document.getElementById('dice');
let advice =  "";
let number;
let error = false;

const downloadDatos = async () => {
    await fetch('https://api.adviceslip.com/advice')
    .then(resp=> resp.json())
    .then(data=> {
        advice = data.slip.advice;
        number = data.slip.id;
    })
    .catch(err=> {
        console.log(err);
        error = true;
    });
    if (error) {
        console.log(advice);
        advice_element.innerText = 'Not found';
        number_element.innerText = '###';  
        error = false;
    } else {
        console.log(advice);
        advice_element.innerText = advice;
        number_element.innerText = number;  
    }
};


document.addEventListener("DOMContentLoaded", downloadDatos);

dice_element.addEventListener('click', ()=>{

    downloadDatos();

})

