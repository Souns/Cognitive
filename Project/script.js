var startCam = document.getElementById('start');

startCam.onclick = function() {

  // Normalize the various vendor prefixed versions of getUserMedia.
  navigator.getUserMedia = (navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia);

                            // Check that the browser supports getUserMedia.
  // If it doesn't show an alert, otherwise continue.
  if (navigator.getUserMedia) {
    // Request the camera.
    navigator.getUserMedia(
      // Constraints
      {
        video: true
      },

      // Success Callback
      function(localMediaStream) {
        // Get a reference to the video element on the page.
var vid = document.getElementById('camera_stream');
var image = document.getElementById('snap');
var captureButton = document.getElementById('capture');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var download_photo_btn = document.getElementById('download_photo');


// Create an object URL for the video stream and use this
// to set the video source.
vid.src = window.URL.createObjectURL(localMediaStream);
captureButton.addEventListener('click', () => {
  // Draw the video frame to the canvas.
    // Setup a canvas with the same dimensions as the video.

    context.drawImage(camera_stream, 0, 0, canvas.width, canvas.height);
    var snap = canvas.toDataURL('image/png');
    image.setAttribute('src', snap);
    download_photo_btn.href = snap;


});

      },

      // Error Callback
      function(err) {
        // Log the error to the console.
        console.log('The following error occurred when trying to use getUserMedia: ' + err);
      }
    );

  } else {
    alert('Sorry, your browser does not support getUserMedia');
  }
}
