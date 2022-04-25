var i=0;
function readme(a){
    var read = document.getElementById('text_area').value;
    if(read==""){
        read = "Text field is empty!"
    }

    let voice_read = new SpeechSynthesisUtterance(read);
    document.getElementById('read').onclick= speechSynthesis.speak(voice_read);
    document.getElementById('read').setAttribute('onclick','readme('+i+')');
    i++;
}
