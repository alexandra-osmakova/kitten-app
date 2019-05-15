import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  kittenInfoCurrent: string = '';
  unsplashId = '9d5cb33c540edcf228b9c9ff3077d9a8d8719b1dcca91f9a5821e9966f7fd57a';
  unsplashUrl = 'https://api.unsplash.com';

  constructor(public http: HttpClient) {
  }

  callForKittenInfo() {
    this.wikiRequest('kitten').subscribe(
      (data: any) => {
        try {
          return this.kittenInfoCurrent = data.extract
        } catch (e) {
          return this.kittenInfoCurrent = 'Wiki doesnt answer'
        }
      }
    );
  }

  wikiRequest(query) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${query}`;

    return this.http.get(url);
  }

  unsplashRequest(id) {
    const url = `${this.unsplashUrl}/collections/${id}/photos/?client_id=${this.unsplashId}&per_page=30`;
    return this.http.get(url);
  }
}

