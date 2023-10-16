document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("video");
    var videocontainer = document.querySelector(".video-container");
    video.addEventListener("ended", function() {
        video.classList.add("fadeOut");


        setTimeout(function() {
            video.classList.add("ended");
            video.remove();
            videocontainer.remove();
        }, 900);
    });

    setTimeout(function() {
        var readMoreElements = document.getElementsByClassName("TIMG");
    
        for (var i = 0; i < readMoreElements.length; i++) {
            readMoreElements[i].classList.add("shake");
        }
    
        setTimeout(function() {
            var tdescElements = document.getElementsByClassName("TDESC");
    
            for (var i = 0; i < tdescElements.length; i++) {
                tdescElements[i].classList.add("shake2");
            }
        }, 300); 
    }, 100); 


});
