angular.module('video-player')
.component('videoList', {
  templateUrl: 'src/templates/videoList.html',
  controller: function() {
    // this.videos = window.exampleVideoData;
    console.log(this);
  },

  bindings: {
    videos: '<',
    clickedOn: '<',
  }
});
