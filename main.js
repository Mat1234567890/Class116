noseX = 0;
noseY = 0;
function preload(){
clown_image = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
console.log("PoseNet has Initalized!");
}
function gotPoses(results){
console.log(results);
if (results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x - 20;
noseY = results[0].pose.nose.y - 10;
console.log("X coordinate = "+ results[0].pose.nose.x);
console.log("Y coordinate = "+ results[0].pose.nose.y);
}
}
function draw(){
image(video, 0, 0, 300, 300);
fill(255,0,0);
stroke(255,0,0);
//circle(noseX, noseY, 20);
image(clown_image, noseX, noseY, 40, 30);
}
function take_snapshot(){
save("filteredPhoto.png");
}