const $video = document.querySelector("#video")
const $play = document.querySelector("#play")
const $pause = document.querySelector("#pause")
const $backward = document.querySelector("#backward")
const $forward = document.querySelector("#forward")
const $progress = document.querySelector("#progress")

$play.addEventListener("click",HandlePlay)
$pause.addEventListener("click",HandlePause)
$backward.addEventListener("click", HandleBackward)
$forward.addEventListener("click", HandleFordward)
$video.addEventListener("loadedmetadata", HandleLoading)
$video.addEventListener("timeupdate", HandleTimeUpdate)
$progress.addEventListener("input", HandleUpdateProgress)

function HandlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    $forward.hidden = false
    $backward.hidden = false
}

function HandlePause(){
    $video.pause()
    $play.hidden = false
    $forward.hidden = true
    $backward.hidden = true
    $pause.hidden = true
}

function HandleBackward(){
    $video.currentTime -= 10
}

function HandleFordward(){
    $video.currentTime += 10
}

function HandleLoading(){
    $progress.max = $video.duration
}

function HandleTimeUpdate(){
    $progress.value = $video.currentTime

    if ($video.currentTime == $progress.max) {
        $play.hidden = false
        $forward.hidden = true
        $backward.hidden = true
        $pause.hidden = true
    }
}

function HandleUpdateProgress(){
    $video.currentTime = $progress.value
}