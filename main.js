function setup() {
  canvas = createCanvas(250, 250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  mobile = ml5.imageClassifier('MobileNet' , loaded);
}
function loaded(){
  console.log("Model Loaded!!!!!!!!!!!!!!!!!!!!!!!!");
}

function draw(){
  image(video , 0 , 0 , 250 , 250);
  mobile.classify(video , got_results);
}

function got_results(error , boing){
  if(error){
    console.error(error);
  }
  else{
    console.log(boing);
    document.getElementById("Object").innerHTML = boing[0].label;
    document.getElementById("Accuracy").innerHTML = boing[0].confidence.toFixed(2)*100 + "%";
  }
}
