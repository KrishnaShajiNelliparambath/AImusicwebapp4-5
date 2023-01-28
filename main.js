scorelw="";
scorerw="";

song1s="";
song2s=""

song1="";
song2="";

lwx="";
lwy="";

rwx="";
rwy="";
function preload(){
    song1=loadSound("music.mp3")
    song2=loadSound("music2.mp3")
}

function setup(){
    canvas=createCanvas(600,500)
    canvas.center()

    video=createCapture(VIDEO)
    video.hide()
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",gotpose)
}

function modelloaded(){
    console.log("Model Loaded")
}

function gotpose(result){
if(result.length>0){
    scorelw=result[0].pose.keypoints[9].score;
    scorerw=result[0].pose.keypoints[10].score;
    console.log(result)
    lwx=result[0].pose.leftWrist.x;
    lwy=result[0].pose.leftWrist.y;
    console.log("left wristx="+lwx+"left wristy="+lwy)
    rwx=result[0].pose.rightWrist.x;
    rwy=result[0].pose.rightWrist.y;
    console.log("right wristx="+rwx+"right wristy="+rwy)
}
}

function draw(){
    image(video,0,0,600,500)
    fill("red")
    stroke("black") 

    song1s=song1.isPlaying();
     console.log(song1)

     if(scorelw>0.2){
        circle(lwx,lwy,20)
        song2.stop()
        if(song1s==false){
            song1.play()
        }
        else{
            document.getElementById("songname").innerHTML="Song Name:Harry Potter"
           
        }
    }




    song2s=song2.isPlaying();
    console.log(song2)

    if(scorerw>0.2){
       circle(rwx,rwy,20)
       song1.stop()
       if(song2s==false){
           song2.play()
       }
       else{
           document.getElementById("songname").innerHTML="Song Name:Peter Pan"
          
       }
   }

}
