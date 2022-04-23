import React from "react";
import './css/soundboard.scss';

function FamousSoundboard() {

let justPlayed = null;

function removeActive() {
  const active = document.querySelector('.active');
  if (active) {
    active.classList.remove('active');
  }
}


function playSound(e) {

    if (e.keyCode === justPlayed) return; // If same key has just been played without key being released, don't play again

    const audio = document.querySelector(`audio[data-key="${e.key}"]`);


    if (!audio) return console.log("hi");

    const key = document.querySelector(`div[data-key="${e.key}"]`);

    audio.currentTime = 0;
    audio.play();
    key.classList.add('active');
    justPlayed = e.keyCode; // Set the key that has just been played
}

function playSoundOnClick(e) {
    const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);


    if (!audio) return console.log("yo");

    audio.currentTime = 0;
    audio.play();
}


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('click', playSoundOnClick));

window.addEventListener('keydown', playSound);
window.addEventListener('click', playSoundOnClick);

window.addEventListener('keyup', () => justPlayed = null);
window.addEventListener('keyup', removeActive);


return (
    <>

    
  <div class="keys">

<div class="rows">

    

    <div data-key="q" class="key">
    Q
    <span class="sound"></span>
    </div>

    <div data-key="w" class="key">
    W
    <span class="sound"></span>
    </div>

    <div data-key="e" class="key">
        E
        <span class="sound"></span>
        </div>

    <div data-key="r" class="key">
    R
    <span class="sound"></span>
    </div>





        <div data-key="t" class="key">
            T
            <span class="sound"></span>
        </div>

        <div data-key="y" class="key">
            Y
            <span class="sound"></span>
        </div>



        <div data-key="u" class="key">
            U
            <span class="sound"></span>
        </div>

        <div data-key="i" class="key">
            I
            <span class="sound"></span>
        </div>

        <div data-key="o" class="key">
            O
            <span class="sound"></span>
        </div>


    </div> 


</div>


<audio data-key="q" src="sounds/famous/bumbum10.mp3"></audio>
<audio data-key="w" src="sounds/famous/bumbumbila10.mp3"></audio>
<audio data-key="e" src="sounds/famous/bumbum20.mp3"></audio>
<audio data-key="r" src="sounds/famous/aaa1time.mp3"></audio>
<audio data-key="t" src="sounds/famous/bum4.mp3"></audio>

<audio data-key="y" src="sounds/famous/ivelovedyou.mp3"></audio>

<audio data-key="u" src="sounds/famous/Idontblame.mp3"></audio>
<audio data-key="i" src="sounds/famous/ijustwanted.mp3"></audio>

<audio data-key="o" src="sounds/famous/madethat.mp3"></audio>

    </>
  );

}

export default FamousSoundboard;