import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  mainPics: Array<string> = [];
  kittensCollection = '4811977'

  constructor(public api: ApiCallService) {
    this.api.callForKittenInfo();
    this.getMainPics()
  }

  ngOnInit() {
  }

  getMainPics() {
    this.api.unsplashRequest(this.kittensCollection).subscribe(
      (data: any) => {
        try {
          this.mainPics = data.map(function(el) {
            return el.urls.small
          })
        } catch (e) {
          console.log('error')
        }
      }
    );
  }

}
