import React from "react";

function GoodMorningSoundboard() {

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
    
        const key = document.querySelector(`div[data-key="${e.key}"]`);
    
        audio.currentTime = 0;
        audio.play();
        key.classList.add('active');
        justPlayed = e.keyCode; // Set the key that has just been played
    }

    function stopAllSounds() {
        const audios = document.querySelectorAll('audio');
        audios.forEach(audio => audio.pause());
    }
    

    function playSoundOnClick(e) {
        const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
    
        // if m key is clicked, stop all sounds
        if (e.target.dataset.key === 'm') {
            stopAllSounds();
        }

        audio.currentTime = 0;
        audio.play();
    }

    
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('click', playSoundOnClick));
    
    window.addEventListener('keydown', playSound);
    window.addEventListener('click', playSoundOnClick);
    
    window.addEventListener('keyup', () => justPlayed = null);
    window.addEventListener('keyup', removeActive);

    
    window.addEventListener('keydown', (e) => {
        if (e.key === 'm') {
            stopAllSounds();
        }
    });

    

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

        <div data-key="p" class="key">
            P
            <span class="sound"></span>
        </div>

        <div data-key="m" class="key">
            M
            <span class="sound"> - Reset</span>
        </div>


</div>


</div>



<audio data-key="q" src="sounds/goodmorning/Kick.mp3"></audio>
<audio data-key="w" src="sounds/goodmorning/Snare.mp3"></audio>
<audio data-key="e" src="sounds/goodmorning/Huh.mp3"></audio>
<audio data-key="r" src="sounds/goodmorning/kanye-res.mp3"></audio>
<audio data-key="t" src="sounds/goodmorning/kanye-organ.mp3"></audio>
<audio data-key="y" src="sounds/goodmorning/kanye-deci.mp3"></audio>
<audio data-key="u" src="sounds/goodmorning/kanye-juno.mp3"></audio>
<audio data-key="i" src="sounds/goodmorning/kanye-intro.mp3"></audio>
<audio data-key="o" src="sounds/goodmorning/perfect.wav"></audio>
<audio data-key="p" src="sounds/goodmorning/kanye-fulltrack.mp3"></audio>



    </>
  );

}

export default GoodMorningSoundboard;