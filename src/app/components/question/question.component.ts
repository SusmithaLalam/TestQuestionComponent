import { Component } from '@angular/core';
import { SpeechService } from "../../services/speech.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [SpeechService],
})
export class QuestionComponent {

  AvatarImages = ['jobs_full.png','jobs_mouth_wide5.png','jobs_mouth_wide5.png','jobs_mouth_narrow_o.png','jobs_mouth_wide_y.png',
	'jobs_mouth_wide5.png','jobs_mouth_wide_d_f_k_r_s.png','jobs_mouth_narrow_w.png','jobs_mouth_narrow_o.png',
	'jobs_mouth_wide_d_f_k_r_s.png','jobs_mouth_narrow_u.png','jobs_mouth_wide5.png','jobs_mouth_wide_d_f_k_r_s.png','jobs_mouth_wide_sh.png',
	'jobs_mouth_wide5.png','jobs_mouth_wide_sh.png','jobs_mouth_wide_sh.png','jobs_mouth_wide_th.png','jobs_mouth_wide_f.png',
  'jobs_mouth_wide_sh.png','jobs_mouth_wide_d_f_k_r_s.png','jobs_mouth_closed.png'];
  question_id = 1;
	question_label = "Algorithm definition";
	question = "What is an algorithm in computer science? What is the use of an algorithm?";
	question_visemes = [[7, 1, 19, 6, 15, 1, 19, 1, 14, 20, 5, 6, 17, 1, 21, 6, 19, 20, 1, 21, 21, 6, 7, 19, 5, 15, 11, 1, 19, 15, 0], [7, 1, 19, 6, 15, 17, 1, 6, 7, 15, 1, 18, 1, 19, 1, 14, 20, 5, 6, 17, 1, 21, 0], [0]];
	quetion_text = "An algorithm is a finite sequence of well-defined instructions to accomplish a given task, that is to transform the given input into the output. To solve any computational problem, an appropriate algorithm or the step-by-step procedure is followed to arrive at the desired solution.";

  constructor(private speechService: SpeechService) {}

  askQuestion(){
    this.speechService.textToSpeech(this.question);
  }
}
