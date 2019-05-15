import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuTabComponent } from './menu-tab/menu-tab.component';
import { OtherAnimalsComponent } from './other-animals/other-animals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'main-page',
    component: HomePageComponent
  },
  {
    path: 'other',
    component: OtherAnimalsComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuTabComponent,
    OtherAnimalsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
