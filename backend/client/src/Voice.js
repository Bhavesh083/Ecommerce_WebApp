import React, { useRef, useState } from 'react';
import './Voice.css';
import { useHistory } from 'react-router';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function Voice() {
  const history = useHistory();
  const commands = [
    {
      command: "open *",
      callback: (website) => {
        console.log(website);
        history.push("/"+website);
      },
    },
    {
      command: "change background colour to *",
      callback: (color) => {
        document.body.style.background = color;
      },
    },
    {
      command: "reset",
      callback: () => {
        handleReset();
      },
    },
    ,
    {
      command: "reset background colour",
      callback: () => {
        document.body.style.background = `rgba(0, 0, 0, 0.8)`;
      },
    },
  ];

  const {transcript, resetTranscript } = useSpeechRecognition({commands});
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };

  const onAndOff = () => {
    if(isListening) 
        stopHandle();
    else 
        handleListing();
  }

  return (
      <div onClick={onAndOff} data={transcript} className="mic-main-box" ref={microphoneRef} >
        <div >
           <span className={`material-symbols-outlined mic-box ${isListening ? `mic-on` : `mic-off`}`}>
               {isListening ? "mic" : "mic_off"}
           </span>
        </div>
      </div>
  )
}

export default Voice;

/*
<div className="microphone-status">
    {isListening ? "Listening........." : "Click to start Listening"}
</div>

{isListening && (
    <button className="microphone-stop btn" onClick={stopHandle}>
      Stop
    </button>
)}
        
{transcript && (
        <div className="microphone-result-container">
          <div className="microphone-result-text">{transcript}</div>
          <button className="microphone-reset btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
*/