import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuStateService } from '../services/menu-state.service';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.scss']
})
export class MenuTabComponent implements OnInit {

  menuControlls: Array<any> = [
    {
      id: 'Home',
      path: 'main-page'
    },
    {
      id: 'Learn about other sweeties',
      path: 'other'
    },
    {
      id: 'Nice pics',
      path: 'gallery'
    },
    {
      id: 'How to take care',
      path: 'to-do-list'
    }

  ]

  constructor(
    private router: Router,
    public menuState: MenuStateService
  ) {
  }


  changePage(i) {
    this.menuState.clearMenuState()
    const path = this.menuControlls[i];
    this.router.navigate([path.path]);
  }

  formCaller() {
    this.router.navigate(['form']);
    this.menuState.changeMenuState();
  }

  ngOnInit() {
  }

}
