noseX = 0
noseY = 0
function preload(){

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}
function draw(){
    image(video , 0 , 0 , 300 , 300);
}
function take_snapshot(){
    save('Filterimage.png');
}
function modelLoaded(){
    console.log('poseNet is Initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 20;
        noseY = results[0].pose.nose.y - 20;
    }
}