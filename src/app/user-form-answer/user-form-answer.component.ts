import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-form-answer',
  templateUrl: './user-form-answer.component.html',
  styleUrls: ['./user-form-answer.component.scss']
})
export class UserFormAnswerComponent implements OnInit {
  @Input() petsIncome: any;

  constructor() {
   }

  ngOnInit() {
  }

}
