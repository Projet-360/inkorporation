/*
  Web Audio and Processing.js test pen
  Audio Visualizer
  
http://forestmist.org/blog/web-audio-api-loops/
https://www.html5rocks.com/en/tutorials/webaudio/intro/
*/

// to 32 <= FFTSIZE=2^n <= 2048. Note: in standard mode, the number of bars visible in the circle is FFTSIZE / 2. In Symmetry mode, the number of bars is equal to FFTSIZE.
var FFTSIZE = 128;

//--------------
// Audio Object
//--------------
var audio = {
  buffer: {},
  compatibility: {},
  file: "./../icon/jupiter.mp3",
  proceed: true,
  playing: false,
  source: {}
};

//-----------------------------
// Check Web Audio API Support
//-----------------------------
try {
  // More info at http://caniuse.com/#feat=audio-api
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  audio.context = new window.AudioContext();
  audio.analyser = audio.context.createAnalyser();
  audio.analyser.fftSize = FFTSIZE;
  document.getElementById('playMusic').style.display = "block";
} catch(e) {
  audio.proceed = false;
  document.getElementById('playMusic').style.display = "none";
  alert('Web Audio API not supported in this browser.');
}

if (audio.proceed) {
  //---------------
  // Compatibility
  //---------------
  (function() {
    var start = 'start',
        stop = 'stop',
        buffer = audio.context.createBufferSource();

    if (typeof buffer.start !== 'function') {
      start = 'noteOn';
    }
    audio.compatibility.start = start;

    if (typeof buffer.stop !== 'function') {
      stop = 'noteOff';
    }
    audio.compatibility.stop = stop;
  })();

  //-------------------------------
  // Setup Audio File
  //-------------------------------
  (function() {
    var req = new XMLHttpRequest();
    req.open('GET', audio.file, true);
    req.responseType = 'arraybuffer';
    req.onload = function() {
      audio.context.decodeAudioData(
        req.response,
        function(buffer) {
          audio.buffer = buffer;
          audio.source = {};
        },
        function() {
          alert('Error decoding audio "' + audio.file + '".');
        }
      );
    };
    req.send();
  })();
}

//-----------------
// Audio Functions
//-----------------
audio.play = function() {
  audio.playing = true;
  audio.source = audio.context.createBufferSource();
  audio.source.buffer = audio.buffer;
  //audio.source.connect(audio.context.destination);

  audio.source.connect(audio.analyser);
  audio.analyser.connect(audio.context.destination);
  
  audio.source[audio.compatibility.start](0);
};

audio.stop = function() {
  audio.source[audio.compatibility.stop](0);
  audio.playing = false;
  audio.source._startTime = audio.source.currentTime;
};









const button = document.getElementById('playMusic');
button.addEventListener('click', function(e) {
  return ( button.classList.contains('active')  ? 
  audio.play() : 
  audio.stop()
  );
});


/*
   Important variables
*/

// border thickness of the circle
var BORDER_SIZE = 0;
// number of bars around the circle Do not modify this value. Change FFTSIZE instead, to 32 <= value=2^n <= 2048.
var NUM_BARS = FFTSIZE / 2;
/* space between 2 consecutives bars. This value modify the width of the bars.
      0: no space between 2 consecutive bars. The bars has the maximum width.
      1: between 2 consecutive bars there is enough space for another bar.
      > 1: the bar width decrease.
  */
var SPACING = 1;
// diameter size: % in respect to the width
var D_PERC = 0.8;
// minimum height of the bars. If zero, the bars will be invisible with low amplitude frequency value. 
var MIN_HEIGHT = 2;
// frequency increase from 0 to Max in ccw (counter clock wise) direction or cw (clock wise) direction.
var DIRECTION = "ccw";
// boolean value. If true, the vertical diameter of the circle will be a symmetry plane.
var SYMMETRY = false;

$("#checkCW").change(function() {
  if ($("#checkCW").is(':checked')) {
    DIRECTION = "cw";
  } else {
    DIRECTION = "ccw";
  }
  processing.setup();
});


/*
    ANIMATION
*/
var canvas = document.getElementById('myCanvasJupiter');

var processing = new Processing(canvas, function(p){
  var w = canvas.offsetWidth;
  var h = canvas.offsetHeight;
  
  var d1, cx1, cy1, len;
  var wb, hb, angle_incr;

  window.addEventListener('resize', function(){
    p.setup();
  });

  p.setup = function(){
    d1 = w * D_PERC;
    cx1 = w / 2;
    cy1 = h / 2;
    len = Math.PI * d1;
    
    // bar width
    wb = len / ((1 + SPACING) * NUM_BARS);
    angle_incr = 2 * Math.PI / NUM_BARS;
    if (DIRECTION == "ccw") {
      angle_incr *= -1;
    }
    hb = (w - d1) / 2;
    
    p.size(w, h);
    //p.frameRate(20);
    p.smooth();  // use anti-aliasing
    p.background(0, 255); // set to transparent background
    p.noStroke();
  };

  p.draw = function() {
    
    p.background(0, 0); // set to transparent background
    
    // Move the coordinate system to the center of the screen
    p.translate(cx1, cy1);
    p.rotate(Math.PI);
    
    // draw bars
    if (audio.proceed){
      drawBars();
    } else {
      drawDefaultBars(NUM_BARS, wb, angle_incr);
    }
    
    // draw disk
    p.smooth();  // use anti-aliasing
    p.stroke(0);
    p.fill(50, 0);
    if (BORDER_SIZE > 0) {
      p.strokeWeight(BORDER_SIZE);
    } else {
      p.noStroke();
    }
    p.ellipse(0, 0, d1, d1);
    
  };
  
  function drawBars() {
    var freqDomain = new Uint8Array(audio.analyser.frequencyBinCount);
      audio.analyser.getByteFrequencyData(freqDomain);
    
    if (!SYMMETRY) {
      if (!audio.playing) {
        drawDefaultBars(FFTSIZE, wb / 2, angle_incr / 2);
      } else { 
        for (var i = 0; i < 2*audio.analyser.frequencyBinCount; i++) {
          var value;
          if (i < audio.analyser.frequencyBinCount) {
            value = freqDomain[i] / 255;
          } else {
            value = freqDomain[2 * audio.analyser.frequencyBinCount - i - 1] / 255;
          }
          p.rotate(angle_incr / 2);
          p.noStroke();
          p.fill(255);
          var hBar = hb * value;
          if (hBar < MIN_HEIGHT) {
            hBar = MIN_HEIGHT;
          }

          if (!audio.playing) {
            hBar = MIN_HEIGHT;
          }
          p.rect(-wb / 2, d1 / 2, wb / 2, hBar);
        }
      }
    }
  }

  
  
  function drawDefaultBars(nRect, wRect, angleIncr) {
    for (var i = 0; i < nRect; i++) {
      p.rotate(angleIncr);
      p.noStroke();
      p.fill(255);
      p.rect(-wb / 2, d1 / 2, wRect, MIN_HEIGHT);
    }
  }
});