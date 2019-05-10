import { BrowserModule } from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { HttpClientModule } from '@angular/common/http';
import { SpeechModule } from 'ngx-speech';
// import { SpeechService } from 'ngx-speech';
import Speech from 'speak-tts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    SpeechModule,
    // SpeechService
  ],
  providers: [
    Speech,
    { provide: 'SPEECH_LANG', useValue: 'en-US' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
