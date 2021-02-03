// main.js

// TODO
var vol= 1;


document.getElementById("radio-air-horn").addEventListener("click",changeImageAir);
document.getElementById("radio-car-horn").addEventListener("click",changeImageCar);
document.getElementById("radio-party-horn").addEventListener("click",changeImageparty);
document.getElementById("volume-number").addEventListener("input", changeVolNumberInput);
document.getElementById("volume-number").addEventListener("click", changeVolNumber);
document.getElementById("volume-slider").addEventListener("input", changeVolNumberSlide);
document.getElementById("honk-btn").addEventListener("click", displaySound);
    
function displaySound(event){
    event.preventDefault();
    if(document.getElementById('radio-air-horn').checked) {
        document.getElementById('horn-sound').src = "./assets/media/audio/air-horn.mp3";
        
      }
      else if(document.getElementById('radio-car-horn').checked) {
         document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
      }
      else if(document.getElementById('radio-party-horn').checked){
          document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
      }

      var sound =document.getElementById("horn-sound");
      sound.volume=vol;
      sound.play();
      
}      

function checkVol(){
    if(vol==0){
        document.getElementById("honk-btn").disabled = true;
     }
     else{
        document.getElementById("honk-btn").disabled = false;
     }
}

function changeVolNumber(){
    var volume=parseInt(document.getElementById("volume-number").value);
    vol= volume/100;
    changeVolImage(vol);
    document.getElementById('volume-slider').value= volume;
    checkVol();
}

function changeVolNumberInput(){
    var volume=parseInt(document.getElementById("volume-number").value);
    vol= volume/100;
    changeVolImage(vol);
    document.getElementById('volume-slider').value= volume;
    checkVol();
}


function changeVolNumberSlide(){
    var volume=parseInt(document.getElementById("volume-slider").value);
    vol= volume/100;
    changeVolImage(vol);
    document.getElementById('volume-number').value= volume;
    checkVol();
}


function changeVolImage(volNum){
    if(0.67<=volNum && volNum<=1){
        document.getElementById("volume-image").src= "./assets/media/icons/volume-level-3.svg";
    }
     else if(0.34<=volNum && volNum <= 0.66){
        document.getElementById("volume-image").src= "./assets/media/icons/volume-level-2.svg";
     }
     else if (0<volNum && volNum<=0.33){
        document.getElementById("volume-image").src= "./assets/media/icons/volume-level-1.svg";
     }
               
    else{
        document.getElementById("volume-image").src= "./assets/media/icons/volume-level-0.svg";
    }  

    

}


function changeImageAir() {
    document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";

}


function changeImageCar() {
    document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    return true;

}

function changeImageparty() {
    document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
    return true;

}

