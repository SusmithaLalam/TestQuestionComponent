import { Injectable } from '@angular/core';
import Speech from 'speak-tts';
import { SpeechService } from 'ngx-speech';

@Injectable({
  providedIn: 'root'
})
export class TextspeechService {

  constructor(private tts: Speech, private stt: SpeechService) { 
    console.log("speech service consructor");
    this.tts
      .init({
        volume: 0.5,
        lang: "en-US",
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
    console.log(data);
    this.tts
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
 