import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  todo:Array<string> = [
    'to Pet 🙀',
    'to Play 🤽‍♂️',
    'to Smile 🙃',
    'to Caress 🐩',
    'to Kiss 😘',
    'to Сuddle 🤩'

  ];

  done:Array<string> = [
    'to Love 🥰',
    'to Hug 🤗',
    'to Feed 👅',
    'to Have fun 🌟'
  ];

  constructor() { 
    if(localStorage.getItem('todo') && localStorage.getItem('done')) {
      this.getFromStorage();
    }
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.setToStorage();
  }

  setToStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todo));
    localStorage.setItem('done', JSON.stringify(this.done));
  }

  getFromStorage() {
    this.todo = JSON.parse(localStorage.getItem('todo'));
    this.done = JSON.parse(localStorage.getItem('done'));
  }
}
