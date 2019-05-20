import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuStateService {
  menuState: boolean = true;

  constructor() { }

  changeMenuState() {
    this.menuState = false
  }

  clearMenuState() {
    this.menuState = true
  }
}
