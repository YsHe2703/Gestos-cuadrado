nosex = 0;
nosey = 0;
diferencia = 0;
manoxizquierda = 0;
manoxderecha = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(580,130);
    posenet = ml5.poseNet(video,modelloded);
    posenet.on('pose',gotPoses)
}

function draw(){
    background("#B0F3ED");
    fill("#D1F1EE");
    stroke("#485453");
    square(nosex, nosey, diferencia);
    document.getElementById("square_side").innerHTML = "El ancho y alto del cuadrado es = " + diferencia + "px";
}

function modelloded(){
    console.log("El modelo se inicio");
}

function gotPoses(resoults){
    console.log(resoults);
    if(resoults.length>0){
        nosex = resoults[0].pose.nose.x;
        nosey = resoults[0].pose.nose.y;
        console.log("Posición nariz en x" + nosex);
        console.log("Posición nariz en y" + nosey);
        manoxderecha = resoults[0].pose.rightWrist.x;
        manoxizquierda = resoults[0].pose.leftWrist.x;
        diferencia = floor(manoxizquierda - manoxderecha);
        console.log(diferencia);
    }
}