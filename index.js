let advice_element = document.getElementById('advice');
let number_element = document.getElementById('number');
let dice_element = document.getElementById('dice');
let advice =  "";
let number;
let error = false;
let permite_click = true;

const downloadDatos = async () => {
    permite_click = false;
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
        advice_element.innerText = `"${advice}"`;
        number_element.innerText = number;
        permite_click = true;
    }
};

const cambiarImagen = () => {
    let width_viewport = document.documentElement.clientWidth;
    let imagen_mobile = document.getElementById('mobile_image');
    let destop_image = document.getElementById('destop_image');

    if(width_viewport > 375) {
        destop_image.classList.remove("ocultar_imagen");
        imagen_mobile.classList.add("ocultar_imagen");
        console.log('cambio');
    } else {
        imagen_mobile.classList.remove("ocultar_imagen");
        destop_image.classList.add("ocultar_imagen");
        console.log('cambio');
    }


}

window.onresize = cambiarImagen;




document.addEventListener("DOMContentLoaded", downloadDatos);

dice_element.addEventListener('click', ()=>{

    downloadDatos();

})

