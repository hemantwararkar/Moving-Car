 document.addEventListener("DOMContentLoaded", function() {
      var audio = document.createElement('audio');
      audio.setAttribute('src', './sound.mp3'); 
      audio.loop = true;
      document.body.appendChild(audio);
      audio.play();
    });