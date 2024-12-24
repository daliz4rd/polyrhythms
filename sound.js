const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound (frequency = 440, duration = 2){
    // fn needs to control frequency and duration
    const osc = audioCtx.createOscillator();
    const envelope = audioCtx.createGain();
    // connect it to the speaker
    osc.connect(envelope);
    envelope.connect(audioCtx.destination);

    envelope.gain.setValueAtTime(0, audioCtx.currentTime);
    envelope.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.05)
    envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);

    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);




}
