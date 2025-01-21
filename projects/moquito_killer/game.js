var _Height = 0
var _Width = 0
var lifes = 1
var time = 20
var createMosquitotime = 1500

var level = window.location.search
level = level.replace('?', '')

if (level === 'normal') {
    createMosquitotime = 1500
}
else if (level === 'hard') {
    createMosquitotime = 1000
}
else if (level === 'impossible') {
    createMosquitotime = 750
}

function ajustaTamanho(){
    _Height = window.innerHeight
    _Width = window.innerWidth
    console.log(_Height, _Width)
}

ajustaTamanho()

var timer = setInterval (function() {
    time -= 1
    if (time === 0 ) {
        clearInterval(timer)
        clearInterval(criaMosquito)
        window.location.href = 'Win.html'
    }
    else {
    document.getElementById ('timer').innerHTML = time
    }
}, 1000)

function posicaoRandomica() {

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if (lifes > 2) {
            window.location.href = 'Game_Over.html'
        }
        else {
        document.getElementById('v' + lifes).src= "images/coracao_vazio.png"
        lifes ++
        }
    }

    var positionX = Math.floor(Math.random() * (_Width - 90));
    var positionY = Math.floor(Math.random() * (_Height - 90));

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    var mosquito = document.createElement('img')
    mosquito.src = 'images/mosquito.png'
    mosquito.className = randomSize() + ' ' + randomSide() 
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
    this.remove()
    }
    document.body.appendChild (mosquito)
}

function randomSize () {
   var classM = Math.floor(Math.random() * 3)
   switch(classM) {
       case 0: 
           return 'mosquito1'
       case 1: 
           return 'mosquito2'
       case 2: 
           return 'mosquito3'
   }
}

function randomSide () {
    var classL = Math.floor(Math.random() * 2)
    switch(classL) {
        case 0: 
            return 'sideA'
        case 1: 
            return 'sideB'
    }
 }