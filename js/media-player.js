
document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);

var mediaPlayer;
var stopBtn = document.getElementById('stop-button');
var muteBtn = document.getElementById('mute-button');

const player = document.querySelector('#media-player');
const video = player.querySelector('#media-video');
const toggle = player.querySelector('#play-pause-button');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const ranges = player.querySelectorAll('.player__slider');
var textTrack;
var playPauseBtn = document.getElementById('play-pause-button');

var subtitleButton = document.getElementById('cc-button');
var subtitles;
for (var i = 0; i < video.textTracks.length; i++) {
    if(video.textTracks[i].kind = 'subtitles'){
        video.textTracks[i].mode = 'hidden';
        subtitles = video.textTracks[i];
    }
}
subtitleButton.addEventListener('click', (e) => {
    if (subtitles) {
        subtitles.mode = (subtitles.mode == 'showing' ? 'hidden' : 'showing');
    }});
    
    function initialiseMediaPlayer() {
        mediaPlayer = document.getElementById('media-video');
        
        mediaPlayer.controls = false;
        
        mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);
        
        playPauseBtn.addEventListener('click', function() {
            changeButtonType(playPauseBtn, 'pause');}, false);
        
        playPauseBtn.addEventListener('click', function() {
            changeButtonType(playPauseBtn, 'play');}, false);
        
        muteBtn.addEventListener('click', function(e) { 
            changeButtonType(muteBtn, 'unmute');}, false);	
        
        muteBtn.addEventListener('click', function(e) { 
            changeButtonType(muteBtn, 'mute');}, false);	
        
        mediaPlayer.addEventListener('ended', function() { 
            this.pause(); }, false);	
    }
    
    async function togglePlayPause() {
    
        if (mediaPlayer.paused || mediaPlayer.ended) {
            await changeButtonType(playPauseBtn, 'pause');
            mediaPlayer.play();
        }
        else {
            await changeButtonType(playPauseBtn, 'play');
            mediaPlayer.pause();
        }
    }
    
    function stopPlayer() {
        mediaPlayer.pause();
        mediaPlayer.currentTime = 0;
    }
    
    function changeVolume(direction) {
        if (direction === '+') mediaPlayer.volume += mediaPlayer.volume == 1 ? 0 : 0.1;
        else mediaPlayer.volume -= (mediaPlayer.volume == 0 ? 0 : 0.1);
        mediaPlayer.volume = parseFloat(mediaPlayer.volume).toFixed(1);
    }
    
    async function toggleMute() {
        if (mediaPlayer.muted) {
            await changeButtonType(muteBtn, 'mute');
            mediaPlayer.muted = false;
        }
        else {
            await changeButtonType(muteBtn, 'unmute');
            mediaPlayer.muted = true;
        }
    }
    
    function replayMedia() {
        resetPlayer();
        mediaPlayer.play();
    }
    
    function updateProgressBar() {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${percent}%`;
    }
    
    
    
    function changeButtonType(btn, value) {
        if(btn && value){
            btn.title = value;
            var buttonImage;
            if(btn.classList.contains('fa-play-circle')){
                buttonImage = document.getElementById('play-img');
                buttonImage.src = "img/video/pause.png";
                btn.classList.add('fa-pause-circle');
                btn.classList.remove('fa-play-circle');
            }
            else if (btn.classList.contains('fa-pause-circle')){
                buttonImage = document.getElementById('play-img');
                buttonImage.src = "img/video/play.png";
                btn.classList.add('fa-play-circle');
                btn.classList.remove('fa-pause-circle');
    
            }
            if(btn.classList.contains('fa-volume-mute')){
                buttonImage = document.getElementById('mute-img');
                buttonImage.src = "img/video/unmute.png";
                btn.classList.add('fa-volume-off');
                btn.classList.remove('fa-volume-mute');
            }
            else if (btn.classList.contains('fa-volume-off')){
                buttonImage = document.getElementById('mute-img');
                buttonImage.src = "img/video/mute.png";
                btn.classList.add('fa-volume-mute');
                btn.classList.remove('fa-volume-off');
    
            }
        }
    }
    
    function loadVideo() {
        for (var i = 0; i < arguments.length; i++) {
            var file = arguments[i].split('.');
            var ext = file[file.length - 1];
            if (canPlayVideo(ext)) {
                resetPlayer();
                mediaPlayer.src = arguments[i];
                mediaPlayer.load();
                break;
            }
        }
    }
    
    function canPlayVideo(ext) {
        var ableToPlay = mediaPlayer.canPlayType('video/' + ext);
        if (ableToPlay == '') return false;
        else return true;
    }
    
    function resetPlayer() {
        progressBar.value = 0;
        video.currentTime = 0;
        changeButtonType(playPauseBtn, 'play');
    }
    
    function handleRangeUpdate() {
        video[this.name] = this.value;
    }
    
    function handleProgress() {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${percent}%`;
    }
    
    function displayChapters(trackElement){
        if ((trackElement) && (textTrack = trackElement.track)){
            if (textTrack.kind === "chapters"){
                textTrack.mode = 'hidden';
                for (var i = 0; i < textTrack.cues.length; ++i) {
                    cue = textTrack.cues[i],
                    chapterName = cue.text,
                    start = cue.startTime,
                    newChapterListItem = document.createElement("li");
                    newChapterListItem.setAttribute('id', start);
                    var chapterDescription = document.createTextNode(cue.text);
                    newChapterListItem.appendChild(chapterDescription);
                    chapterList.append(newChapterListItem);
                    var chaptersList = document.getElementById('chapters');
                    var chaptersListItems = chaptersList.getElementsByTagName('li');
                    // loop through li items and add click event listener
                    for (let x = 0; x < chaptersListItems.length; x++){
                        chaptersListItems[x].addEventListener("click", () => {                    
                            document.getElementById('media-video').currentTime = chaptersListItems[x].id;
                            chaptersListItems[x].style.textShadow = "-1px 1px 0 #340a67, 1px 1px 0 #340a67, 1px -1px 0 #340a67; -1px -1px 0 #340a67";
                        }, false);
    
                    }
                }
            textTrack.addEventListener("cuechange",
                function() {
                    var currentChapter = this.activeCues[0].startTime;
                    if (chapter = document.getElementById(currentChapter)) {
                        var locations = [].slice.call(document.querySelectorAll("#chapters li"));
                        for (var i = 0; i < locations.length; ++i) {locations[i].classList.remove("current");}
                        chapter.classList.add("current");
                        chapterList.style.top = "-"+chapter.parentNode.offsetTop+"px";
                    }
                },false);
            }
        }
    }
    function scrub(e) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }
    
    video.addEventListener('click', togglePlayPause);
    video.addEventListener('play', changeButtonType);
    video.addEventListener('pause', changeButtonType);
    video.addEventListener('timeupdate', handleProgress);
    
    
    ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
    ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
    
    let mousedown = false;
    
    progress.addEventListener('click', scrub);
    progress.addEventListener('mousemove', ()=> mousedown && scrub(e));
    progress.addEventListener('mousedown', () => mousedown = true);
    progress.addEventListener('mouseup', () => mousedown =false);
    progress.addEventListener('change', handleProgress);
    
    
    var chapterList = document.getElementById("chapters");
    var trackElement = video.getElementsByTagName("track")[0];