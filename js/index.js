var audio = document.getElementById('audio');
audio.play();
var lis = document.querySelectorAll('ul.jj li');
lis.forEach(li => {
    li.onclick = function() {
        audio.src = './res/' + this.getAttribute('m') + '.mp3';
        audio.play();
        console.log(this.innerHTML)
    }
});
document.querySelector('.s1').onclick = function() {
    audio.currentTime = 0;
    console.log('重开')
};
document.querySelector('.s2').onclick = function() {
    audio.pause();
    console.log('停止')
}