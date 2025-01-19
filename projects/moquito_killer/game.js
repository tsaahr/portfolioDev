var _Height = 0
var _Width = 0

function ajustaTamanho(){
    _Height = window.innerHeight
    _Width = window.innerWidth
    console.log(_Height, _Width)
}

ajustaTamanho()

function posicaoRandomica() {
    var positionX = Math.floor(Math.random() * (_Width - 90));
    var positionY = Math.floor(Math.random() * (_Height - 90));

   positionX = positionX < 0 ? 0 : positionX
   positionY = positionY < 0 ? 0 : positionY

   console.log(positionX, positionY)

   var mosquito = document.createElement('img')
   mosquito.src = 'images/mosquito.png'
   mosquito.className = randomSize()
   mosquito.style.left = positionX + 'px'
   mosquito.style.top = positionY + 'px'
   mosquito.style.position = 'absolute'

   document.body.appendChild (mosquito)
   randomSize()
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

function randomSize () {
    var classL = Math.floor(Math.random() * 2)
    switch(classM) {
        case 0: 
            return 'sideA'
        case 1: 
            return 'sideB'
    }
 }