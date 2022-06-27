let advice_element = document.getElementById('advice');
let number_element = document.getElementById('number');
let dice_element = document.getElementById('dice');
let advice =  "";
let number;
let error = false;
let permite_click = true;

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
        advice_element.innerText = 'Not found';
        number_element.innerText = '###';  
        error = false;
        permite_click = true;
    } else {
        console.log(advice);
        advice_element.innerText = `"${advice}"`;
        number_element.innerText = number;
        permite_click = true;
    }
};






document.addEventListener("DOMContentLoaded", downloadDatos);

dice_element.addEventListener('click', ()=>{
    permite_click = false;
    downloadDatos();

})

