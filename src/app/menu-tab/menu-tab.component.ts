import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.scss']
})
export class MenuTabComponent implements OnInit {

  menuControlls: any= [
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
    private router: Router
  ) { 
    
  }

  changePage(i) {
    const path = this.menuControlls[i];
    this.router.navigate([path.path]);
  }

  ngOnInit() {
  }

}
