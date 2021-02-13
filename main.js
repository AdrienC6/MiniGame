const up = document.querySelector('#up');
const down = document.querySelector('#down');
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const rocket = document.querySelector('.fa-rocket');
const target = document.querySelector('.fa-soundcloud');
const score = document.querySelector('.score')
var localScore = 0;
score.innerHTML = localScore;


down.addEventListener('click', function () {
    rocket.style.marginTop = Number(window.getComputedStyle(rocket).getPropertyValue('margin-top').replace("px", "")) + 20 + "px";
    position("300px", "600px", "one");
    position("500px", "460px", "two");
    position("100px", "800px", "three");
    position("20px", "280px", "four");
    position("300px", "100px", "five");

})

up.addEventListener('click', function () {
    rocket.style.marginTop = Number(window.getComputedStyle(rocket).getPropertyValue('margin-top').replace("px", "")) - 20 + "px";
    position("300px", "600px", "one");
    position("500px", "460px", "two");
    position("100px", "800px", "three");
    position("20px", "280px", "four");
    position("300px", "100px", "five");
})

right.addEventListener('click', function () {
    rocket.style.marginLeft = Number(window.getComputedStyle(rocket).getPropertyValue('margin-left').replace("px", "")) + 20 + "px";
    position("300px", "600px", "one");
    position("500px", "460px", "two");
    position("100px", "800px", "three");
    position("20px", "280px", "four");
    position("300px", "100px", "five");
})

left.addEventListener('click', function () {
    rocket.style.marginLeft = Number(window.getComputedStyle(rocket).getPropertyValue('margin-left').replace("px", "")) - 20 + "px";
    position("300px", "600px", "one");
    position("500px", "460px", "two");
    position("100px", "800px", "three");
    position("20px", "280px", "four");
    position("300px", "100px", "five");
})


function position($value1, $value2, $id) {
    if (
        window.getComputedStyle(rocket).getPropertyValue('margin-top') === $value1 && window.getComputedStyle(rocket).getPropertyValue('margin-left') === $value2) {
        if (document.getElementById($id).classList.contains('fa-3x')) {
            score.innerHTML = parseInt(1 + Number(score.innerHTML));
            document.getElementById($id).removeAttribute('class', 'fab fa-soundcloud fa-3x');

            localScore += 1;
        }

        victory();
    }
}

function victory() {

    if (localScore === 5) {
        alert('Victoire !')
        window.location.reload();
    }
}







