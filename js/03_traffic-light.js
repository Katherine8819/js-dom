document.getElementById('traffic-light').removeAttribute('hidden')


let btn = document.getElementById('btn')
let i = 0;

btn.addEventListener('click', function () {
    i++;
    let light = document.querySelectorAll('.light__lamp')

    light[i].style.opacity = '1'
    if (i - 1 >= 0) {
        light[i - 1].style.opacity = '0.3'
    } else {
        light[2].style.opacity = '0.3'
    }

    if (i == 2) {
        i = -1;
    }

}, false)





// Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.