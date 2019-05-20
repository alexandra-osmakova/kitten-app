import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuTabComponent } from './menu-tab/menu-tab.component';
import { OtherAnimalsComponent } from './other-animals/other-animals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './gallery/gallery.component';
import { ToDoComponent } from './to-do/to-do.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserFormAnswerComponent } from './user-form-answer/user-form-answer.component';
import { MenuStateService } from './services/menu-state.service'

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
  {
    path: 'to-do-list',
    component: ToDoComponent
  },
  {
    path: 'form',
    component: UserFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuTabComponent,
    OtherAnimalsComponent,
    GalleryComponent,
    ToDoComponent,
    UserFormComponent,
    UserFormAnswerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [MenuStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
