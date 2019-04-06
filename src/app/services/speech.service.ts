import { Injectable } from '@angular/core';
import Speech from 'speak-tts';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  constructor(private speech: Speech) { 
    this.speech
      .init({
        volume: 0.5,
        lang: "en-GB",
        rate: 0.9,
        pitch: 1,
        voice: 'Google US English Male',
      })
      .then(data => {
        console.log("Speech is ready", data);
      })
      .catch(e => {
        console.error("An error occured while initializing : ", e);
      });
  }

  textToSpeech(data) {
    this.speech
      .speak({
        text: data,
      })
      .then(data => {
        console.log("TTS Success! ", data);
      })
      .catch(e => {
        console.error("An error occurred: ", e);
      });
  }
}
