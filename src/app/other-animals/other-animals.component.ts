import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service'


@Component({
  selector: 'app-other-animals',
  templateUrl: './other-animals.component.html',
  styleUrls: ['./other-animals.component.scss']
})
export class OtherAnimalsComponent implements OnInit {

  searchInput: string;
  searchInfo: string;
  searchImg: string;

  constructor(
    public api: ApiCallService
  ) { }

  ngOnInit() {
  }

  currentSearch() {
    this.api.wikiRequest(this.searchInput).subscribe(
      (data: any) => {
        try {
          console.log(data)
          if(data.type !== "standard") {
            this.searchInfo = 'No info about this sweetie in Wiki 😭';
          }
          else {
            this.searchInfo = data.extract;
            if(data.originalimage.source) {
               this.searchImg = data.originalimage.source
            }
           
          }
        } catch (e) {
          this.searchInfo = 'No info about this sweetie in Wiki 😭';
        }
      }
    );
  }

}
