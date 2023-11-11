document.addEventListener("DOMContentLoaded", function() {
  const blackscreenBlocker = document.querySelector('.blackscreenBlocker');
  
  if (isMobile()) {
    blackscreenBlocker.remove();
    document.getElementById("video").remove();
    document.querySelector(".video-container").style.display = 'none';
    document.getElementById('loadingIDIndicator').style.display = 'none';
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursorDot');
    cursorDot.display = 'none';
    cursor.display = 'none'
    menuDisplay.style.display = 'block';
    document.getElementById("preloader-bar").style.display = 'none';
    document.getElementById("relativeID").style.display = 'none';
    loadingIsOver = true;
    return;
  }
  setTimeout(function() {
      var readMoreElements = document.getElementsByClassName("TIMG");
      blackscreenBlocker.remove();
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
  function clearLoadingText() {
    document.getElementById('loadingIDIndicator').classList.add("smokeFade");
    setTimeout(function() {
        document.getElementById('loadingIDIndicator').style.display = 'none';
    }, 1000);
}
function clearandPlayVideo() {
  document.getElementById("relativeID").style.display = 'none';
  var video = document.getElementById("video");
  var videocontainer = document.querySelector(".video-container");
  clearLoadingText();
  setTimeout(function() {
      video.play();
  }, 1000);
  setTimeout(function() {
      video.classList.add("fadeOut");
  }, 2000);
  setTimeout(function() {
      video.classList.add("ended");
      video.remove();
      videocontainer.remove();
  }, 2800);
}
class Preloader {
    #c = 0;
    #percentage = 0;
    #length = 0;
    #elements = [];
    #loaderStep = () => {};
    #loadingFinished = () => {};
    #step = (c, p) => {
      setTimeout(() => {
        this.#loaderStep(c, p);
        if (Math.round(p) == 100) {
          setTimeout(() => {
            this.#loadingFinished();
          }, 100);
        }
      }, c * 100);
    };
    handleLoad() {
      this.#percentage = (++this.#c * 100) / this.#length;
      this.#step(this.#c, this.#percentage);
    }
    constructor(numOfAjaxRequests, loaderStep, loadingFinished) {
      this.#elements = [
        ...document.querySelectorAll("link"),
        ...document.querySelectorAll('img:not([loading="lazy"])'),
        ...document.querySelectorAll('object:not([loading="lazy"])'),
        ...document.querySelectorAll('iframe:not([loading="lazy"])'),
        ...document.querySelectorAll('video:not([loading="lazy"])'),
        //...document.querySelectorAll('audio:not([loading="lazy"])')
      ];
      this.#length = this.#elements.length + numOfAjaxRequests;
      if (typeof loaderStep == "function") this.#loaderStep = loaderStep;
      if (typeof loadingFinished == "function")
        this.#loadingFinished = loadingFinished;
      for (let elem of this.#elements) {
        if (elem.isConnected) this.handleLoad();
        else elem.addEventListener("load", this.handleLoad.bind(this));
      }
    }
  }
  const preloader = new Preloader(
    0,
    function (c, p) {
    document.getElementById("preloader-bar").style.width = p + "%";
    document.getElementById("loadingIDIndicator").innerHTML = 'LOADING: ' +
      Math.round(p) + "%";
    },
    function () {
        document.getElementById("relativeID").style.display = 'none';
        var video = document.getElementById("video");
        var videocontainer = document.querySelector(".video-container");
        clearLoadingText();
        setTimeout(function() {
            video.play();
        }, 1000);

        setTimeout(function() {
            video.classList.add("fadeOut");
        }, 2000);

        setTimeout(function() {
            video.classList.add("ended");
            video.remove();
            videocontainer.remove();
            doneLoading()
        }, 2800);
    }
  );
const throttleUpdate = (function() {
  let lastUpdate = 0;
  const framerate = 60;

  return function(e) {
      if (isMobile()) {
          return;
      }

      const now = Date.now();
      if (now - lastUpdate >= 1000 / framerate) {
          const cursor = document.querySelector('.cursor');
          const cursorDot = document.querySelector('.cursorDot');

          cursor.style.left = e.pageX + 'px';
          cursor.style.top = e.pageY + 'px';

          cursorDot.style.left = e.pageX + 'px';
          cursorDot.style.top = e.pageY + 'px';

          lastUpdate = now;
      }
  };
})();

document.addEventListener('mousemove', throttleUpdate);

document.body.style.cursor = 'none';
});
let loadingIsOver = false;
const menuDisplay = document.getElementById('MenuButtonContainer')
menuDisplay.style.display = 'none';
function doneLoading() {
  loadingIsOver = true;
  menuDisplay.style.display = 'unset';
}

function loadingIsOverFunc() {
  if (loadingIsOver) {
    return true;
  }
}
