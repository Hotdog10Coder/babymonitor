sound = "";
updates = ""
objects = [];
function preload(){
    sound = loadSound("alarm.mp3")
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    

video = createCapture(VIDEO);
video.size(380,380);
video.hide();
   
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
    console.log(" Model Loaded :D ");
    updates = true;
   
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);

    objects = results;
}

function draw(){
    image(video, 0, 0, 380, 380);


if( objects.label == person){

    document.getElementById("status").innerHTML = "Status: Baby Detected.";
}

else{
sound.play();
document.getElementById("status").innerHTML = "Status: Baby not Detected.";
}




    
}