import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  currentGallery: Array<Array<object>> = [[], [], []];
  fullGallery: Array<object>

  constructor(
    public api: ApiCallService
  ) { }

  ngOnInit() {
    this.getGalleryPics()
  }

  getGalleryPics() {
    this.api.unsplashRequest(4820156).subscribe(
      (data: any) => {
        try {
          console.log(data)
          this.fullGallery = data.map(function (el, index) {
            return {id: index, val: el.urls.small}
          })
          this.createGalleryColumns()
        } catch (e) {
          console.log('error')
        }
      }
    );
  }

  createGalleryColumns() {
    const galleryToSplice = this.fullGallery.slice();
    for(let i = 0; i < this.currentGallery.length; i++) {
      this.currentGallery[i] = galleryToSplice.splice(0, 10);
    }
  }

  refreshGallery() {
    this.fullGallery.sort(this.compareRandom);
    this.createGalleryColumns()
  }

  compareRandom(a, b) {
    return Math.random() - 0.5;
  }
}
