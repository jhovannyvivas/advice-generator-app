let advice_element = document.getElementById('advice');
let number_element = document.getElementById('number');
let dice_element = document.getElementById('dice');
let advice =  "";
let number;
let error = false;
let permite_click = true;

let id_consejo = null;




const downloadDatos = async () => {
    dice_element.classList.remove("clase_para_hover");
    id_consejo = null;
    await fetch('https://api.adviceslip.com/advice')
    .then(resp=> resp.json())
    .then(data=> {
        advice = data.slip.advice;
        id_consejo = data.slip.id;
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
        if (number !== id_consejo) {
            console.log(advice);
            number = id_consejo;
            advice_element.innerText = `"${advice}"`;
            number_element.innerText = number;
            dice_element.classList.add("clase_para_hover");
            permite_click = true;

        } else {
            downloadDatos();
        }

    }
};






document.addEventListener("DOMContentLoaded", downloadDatos);

dice_element.addEventListener('click', ()=>{

    permite_click = false;
    downloadDatos();

})

