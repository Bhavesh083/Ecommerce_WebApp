import React, { useRef, useState } from 'react';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
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

  const { transcript, resetTranscript } = useSpeechRecognition({commands});
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  const handleListing = () => {
    setIsListening(true);
    console.log("Listening");
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  const stopHandle = () => {
    console.log(transcript);
    setIsListening(false);
    console.log("stop listening");
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };

  return (
    <div className="microphone-wrapper">
      <div className="mircophone-container">
        <div className="microphone-icon-container" ref={microphoneRef} onClick={handleListing} >
          <span className='mgr-icon'> <HeadsetMicIcon /></span>
        </div>
        <div className="microphone-status">
          {isListening ? "Listening........." : "Click to start Listening"}
        </div>
        {isListening && (
          <button className="microphone-stop btn" onClick={stopHandle}>
            Stop
          </button>
        )}
      </div>
      {transcript && (
        <div className="microphone-result-container">
          <div className="microphone-result-text">{transcript}</div>
          <button className="microphone-reset btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>
  )
}

export default Voice;