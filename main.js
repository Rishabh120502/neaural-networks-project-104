Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
jpeg_quality: 90
});
Webcam.attach(camera)
var camera=document.getElementById("camer")

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="imgSave" src="'+data_uri+'"/>'
    })
}

console.log("ml5version",ml5.version);

complifier=ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/gtLoaTPVJ/.json',modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}