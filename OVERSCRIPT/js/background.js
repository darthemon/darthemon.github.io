const bgDiv = document.querySelector("body");
const images = ["./img/blackforest.png", "./img/busan.png", 
"./img/hanamura.png", "./img/horizon.png", "./img/lijiang.png",
"./img/midtown.png", "./img/paris.png", "./img/route66.png",
"./img/anubis.png", "./img/dorado.png", "./img/eichenwalde.png",
"./img/gibraltar.png", "./img/havana.png", "./img/ilios.png",
"./img/kingsrow.png", "./img/oasis.png", "./img/paraiso.png",
"./img/rialto.png", "./img/volskaya.png",];

const chosenImg = images[Math.floor(Math.random() * images.length)];

bgDiv.style.backgroundImage=`URL(${chosenImg})`;