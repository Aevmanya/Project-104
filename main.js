function move(){
window.location= "webcam.html";
};

Webcam.set({
width: 350,
height: 350,
image_format: 'png',
png_quality: 90
});
    
camera= document.getElementById("camera").value;
    
Webcam.attach('#camera');
    
    
function take_snapshot(){
Webcam.snap(function(data_uri){
    
document.getElementById("image").innerHTML= '<img id="captured_image" src="'+data_uri+'">';
});
};