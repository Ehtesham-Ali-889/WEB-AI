
import './App.css';
import Webcam from "react-webcam";
import useSpeechToText from 'react-hook-speech-to-text';
import React, { useState,useEffect } from 'react';
function App() {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;
  
  return (
    <div className="App">
      <Webcam />
      {isRecording ? <Webcam />:''}     
      {/* <h1>Recording: {isRecording.toString()}</h1> */}
      <div>
        <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
          {isRecording ? 'End Call' : 'Start Call'}
        </button>
        <p>
          {results.map((result) => (
            <span key={result.timestamp}>{result.transcript}</span>
          ))}
          {/* {interimResult && <p>{interimResult}</p>} */}
        </p>
      </div>
      
      

    </div>
  );
}

export default App;
